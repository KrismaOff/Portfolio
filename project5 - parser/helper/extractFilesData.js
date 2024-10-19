module.exports = extractFilesData = async (page, homework, task) => { // Пробегается по списку файлов
    return await page.evaluate((date, student, module, task) => {
      const fileLinks = document.querySelectorAll(".tlk-homework__answer-files-panel-wrap a");
      return Array.from(fileLinks).map(link => ({
        date: date,
        student: student,
        module: module, // Удаление даты
        task: task,
        filepath: link.href,
        filepathDock: ""
      }));
    }, homework.date, homework.student, homework.module, task);
  };