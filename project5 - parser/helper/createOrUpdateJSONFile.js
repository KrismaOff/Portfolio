const fs = require('fs');
const path = require('path');
const downloadFileJSON = require('../downloadGoogleFiles/downloadWork')

const dirPath = path.resolve(__dirname, '../Data'); // Путь к папке на уровень выше
const filePath = path.join(dirPath, 'info.json');   // Полный путь к JSON-файлу

module.exports = function createOrUpdateJSONFile(data) {
  try {
    let existingData = {};

    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, 'utf8');
      existingData = JSON.parse(fileContent) || {};
    }

    // Объединение существующих данных с новыми
    const updatedData = Object.assign(existingData, data);

    // Преобразование данных в формат JSON и запись в файл
    const jsonData = JSON.stringify(updatedData, null, 2);
    fs.writeFileSync(filePath, jsonData, 'utf8');
    console.log(`Файл успешно создан или обновлен: ${filePath}`);
    downloadFileJSON(jsonData) //  Сделать проверку на созданные файлы
    
  } catch (error) {
    console.error(`Ошибка при создании или обновлении файла: ${error.message}`);
  }
};
