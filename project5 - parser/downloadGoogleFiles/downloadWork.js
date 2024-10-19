const fs = require('fs');
const path = require('path');
const { google } = require('googleapis');

// Путь к учетным данным и токену
const CREDENTIALS_PATH = path.resolve(__dirname, 'credentials.json');
const TOKEN_PATH = path.resolve(__dirname, 'token.json');
const BASE_FOLDER_PATH = path.resolve(__dirname, '../Data/Works');

async function getAccessToken(oAuth2Client) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: ['https://www.googleapis.com/auth/drive.readonly'],
  });
  console.log('Авторизуйтесь, перейдя по ссылке:', authUrl);

  const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve, reject) => {
    rl.question('Введите код с страницы авторизации: ', (code) => {
      rl.close();
      oAuth2Client.getToken(code, (err, token) => {
        if (err) return reject(err);
        console.log('Полученный токен:', token); // Выводим токен для отладки
        oAuth2Client.setCredentials(token);
        // Сохраните токен на будущее использование
        fs.writeFileSync(TOKEN_PATH, JSON.stringify(token));
        console.log('Токен сохранен в', TOKEN_PATH);
        resolve(oAuth2Client);
      });
    });
  });
}

async function authorize() {
  const credentials = JSON.parse(fs.readFileSync(CREDENTIALS_PATH, 'utf8'));
  const { client_secret, client_id, redirect_uris } = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

  // Проверяем наличие токена
  if (fs.existsSync(TOKEN_PATH)) {
    try {
      const token = fs.readFileSync(TOKEN_PATH, 'utf8');
      // Если файл пустой или содержит '{}', получаем новый токен
      if (!token || token === '{}') {
        throw new Error('Token is empty, fetching a new one');
      }
      oAuth2Client.setCredentials(JSON.parse(token));
      return oAuth2Client;
    } catch (err) {
      console.log('Ошибка токена, получаем новый:', err.message);
      return await getAccessToken(oAuth2Client);
    }
  } else {
    // Получаем новый токен, если он не был сохранен
    return await getAccessToken(oAuth2Client);
  }
}

async function downloadGoogleDriveFile(fileId, destination, auth) {
  const drive = google.drive({ version: 'v3', auth });
  const response = await drive.files.get(
    { fileId: fileId, alt: 'media' },
    { responseType: 'stream' }
  );

  return new Promise((resolve, reject) => {
    const dest = fs.createWriteStream(destination);
    response.data
      .on('end', () => {
        console.log(`Файл успешно загружен в: ${destination}`);
        resolve(destination);
      })
      .on('error', (err) => {
        console.error('Ошибка при загрузке файла:', err);
        reject(err);
      })
      .pipe(dest);
  });
}

function extractFileId(url) {
  const match = url.match(/(?:\/d\/|id=)([a-zA-Z0-9_-]+)/);
  return match ? match[1] : null;
}


async function downloadFileByUrl(url, fileName) {
  try {
    const auth = await authorize();

    // Извлечение fileId из URL
    const fileId = extractFileId(url);
    if (!fileId) {
      console.error('Не удалось извлечь fileId из ссылки:', url);
      return;
    }

    // Создание папки для хранения файлов, если её нет
    if (!fs.existsSync(BASE_FOLDER_PATH)) {
      fs.mkdirSync(BASE_FOLDER_PATH, { recursive: true });
      console.log(`Директория успешно создана: ${BASE_FOLDER_PATH}`);
    }

    // Определение полного пути для хранения файла
    const destinationPath = path.join(BASE_FOLDER_PATH, fileName);

    // Загрузка файла с Google Drive и сохранение в указанное место
    await downloadGoogleDriveFile(fileId, destinationPath, auth);
  } catch (error) {
    console.error('Ошибка при загрузке файла:', error);
  }
}

async function downloadFileJSON(data) {
  const existingData = typeof data === 'string' ? JSON.parse(data) : data;

  Object.keys(existingData).forEach(homeworkId => {
    const homework = existingData[homeworkId];
    const format = homework.filepath.split(".").at(-1);
    const [url, fileName] = [homework.filepathDock, `${homeworkId}_${homework.student}_${homework.date.split(" ")[0]}.${format}`];
  
    if (url) {
      downloadFileByUrl(url, fileName);
    } else {
      console.error(`Ошибка: отсутствует URL для студента ${homework.student} в объекте ${homeworkId}`);
    }
  });
}

module.exports = downloadFileJSON;

// const uri = 'https://drive.google.com/file/d/1T5q0f_EdkZEQqr3TbVfn0DdoILqEAGma/view'; // Ссылка на файл
// const fileName = 'student_homework.zip'; // Имя файла, под которым он будет сохранен
// downloadFileByUrl("https://drive.google.com/open?id=1tAAkTwIiI3bsrCnv5kLAdXIxg1jUgS0y", "fileName.zip")

// (async () => {
//   try {
//     const auth = await authorize();
//     console.log("Авторизация прошла успешно!", auth);
//   } catch (error) {
//     console.error('Ошибка при авторизации:', error);
//   }
// })();