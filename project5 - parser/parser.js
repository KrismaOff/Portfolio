const puppeteer = require('puppeteer');
const createOrUpdateJSONFile = require('./helper/createOrUpdateJSONFile')
const extractFilesData = require('./helper/extractFilesData')
const getHrefFromPage = require('./helper/getHrefFromPage')
const JSONData = require('./Data/info.json');
const downloadFileJSON = require('./downloadGoogleFiles/downloadWork');

async function parseUrban(pageIndex = 1) {
  const browser = await puppeteer.launch({ headless: false, slowMo: 25 });
  const page = await browser.newPage();

  const url = 'https://urban-university.ru/members/courses/course207313522962/taskcheck?tab=wait';
  await page.goto(url, { waitUntil: 'networkidle2' });
  console.log("Страница загружена");

  // Авторизация
  await page.waitForSelector("input[name='login']", { timeout: 30000 });
  await page.type("input[name='login']", 'bochin.k@edex.online', { delay: 0 });
  await page.type("input[name='password']", 'VFRNUVZF', { delay: 0 });
  await page.click("button[type='submit']");
  console.log("Данные введены, вход в систему");

  await page.waitForNavigation({ waitUntil: "networkidle2" });
  console.log("Авторизация успешна. Переход на страницу с домашними заданиями.");

  // Ожидание загрузки таблицы с домашними заданиями
  await page.waitForSelector(".tlk-homeworks__table-body", { timeout: 30000 });
  // await page.waitForFunction(() => document.querySelectorAll('.tlk-homeworks__table-body .tlk-homeworks__table-row').length > 0, { timeout: 30000 });

  // Извлечение данных о строках домашних заданий и страницах
  const pages = await page.evaluate(() => {
    const allPages = document.querySelectorAll(".tlk-pagination li a");
    return Array.from(allPages).map((page, index) => ({
      text: page.innerText,
      // href: page.href,                      
      isActive: page.parentElement.classList.contains('active'),
      selector: `.tlk-pagination li:nth-child(${index + 1}) a`
    }));
  });
  // console.log(pages[pageIndex - 1]);

  await page.click(pages[pageIndex - 1].selector)
  await page.waitForSelector(".tlk-homeworks__table-body", { timeout: 30000 });
  // await page.waitForFunction(() => document.querySelectorAll('.tlk-homeworks__table-body .tlk-homeworks__table-row').length > 0, { timeout: 30000 });
  console.log("Таблица с домашними заданиями появилась.");


  const homeworks = await page.evaluate(() => {
    const rows = document.querySelectorAll('.tlk-homeworks__table-body .tlk-homeworks__table-row');
    return Array.from(rows).map((row, index) => {
      const date = row.querySelector('.tlk-homeworks__table-col_date')?.innerText.trim() || 'Не указано';
      const student = row.querySelector('.tlk-homeworks__table-name')?.innerText.trim() || 'Не указано';
      const module = row.querySelector('.tlk-homeworks__table-col_lg')?.innerText.replace(/^\d{4}\/\d{2}\/\d{2}( \d{2}:\d{2})?\|?/, '').replace(/"/g, '').trim() || 'Не указано';
      const task = 'Не указано'
      const buttonSelector = `.tlk-homeworks__table-body .tlk-homeworks__table-row:nth-child(${index + 1}) .tlk-homeworks__table-more`;

      return { date, student, module, task, buttonSelector };
    });
  });

  console.log('Найдено строк с домашними заданиями:', homeworks.length);
  console.log('Найдено количество страниц:', pages.length)

  console.table(pages);
  console.table(homeworks);

  const saveRecord = (data, index) => {
    JSONDataObj[index] = data
    console.log("Записан файл");
  };

  function isLinkRecorded(file) {
    // false - нужно записать
    // true - не нужно записывать
    let result = false
    const obj = Object.keys(JSONData)
    for (let i = 0; i < obj.length; i++) {
      const object = JSONData[obj[i]]
      if (object.filepath === file.filepath) {
        if (object.filepathDock.length !== 0) {
          result = true;
          break;
        }
      }
    }
    return result;
  }


  const JSONDataObj = {};

  for (const [index, homework] of homeworks.entries()) {
    console.log(`----------- Модальное окно №${index} открыто --------------`);
    await page.click(homework.buttonSelector);
    await page.waitForSelector(".tlk-homework__answer-text", { timeout: 30000 });

    const answerStudentText = await page.evaluate(() => {
      const answerElement = document.querySelector(".tlk-homework__answer-text");
      return answerElement ? answerElement.innerText.trim() : "";
    });
    const answerStudentFilesButton = await page.evaluate(() => document.querySelector(".tlk-homework__answer-files-button") ? true : false);

    const githubLink = answerStudentText.match(/https:\/\/github\.com\/[^\s]+/);
    const task = await page.evaluate(() => document.querySelector(".tlk-homework__task").innerText || "Не указано");


    if (githubLink) {
      console.log("Github ссылка записана");
      saveRecord({
        date: homework.date,
        student: homework.student,
        module: homework.module,
        task: task,
        filepath: githubLink[0]
      }, index);
    } else if (!githubLink && answerStudentFilesButton) {
      await page.click(".tlk-homework__answer-files-button");
      const files = await extractFilesData(page, homework, task);
      const lastFile = files.at(-1);

      // Проверка на google-ссылку, если ее нет в JSON, то мы ее записываем
      if (lastFile && !isLinkRecorded(lastFile)) {
        const realHref = await getHrefFromPage(page, lastFile.filepath);
        if (realHref) {
          console.log("Ссылка на файл была записана");
          lastFile.filepathDock = realHref
          saveRecord(lastFile, index)
        } else console.log("Ссылка на файл отсутсвует");
      } else console.log("Ссылка на файл уже имеется");
    } else {
      console.log(`Модульное окно №${index} закрыто`);
      
    }

    await page.click(".tlk-popup__close");
    await page.waitForSelector(".tlk-popup__close", { hidden: true, timeout: 30000 });
    console.log(`----------------------------------------------------`);
  }

  createOrUpdateJSONFile(JSONDataObj)
  await browser.close();
}

// Запуск функции парсинга с обработкой ошибок
parseUrban(2).catch(error => console.error('Ошибка парсинга:', error));
// downloadFileJSON(JSONData)


