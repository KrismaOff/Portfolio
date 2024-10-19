module.exports = async function getHrefFromPage(page, url) {
  try {
    await page.goto(url, { waitUntil: 'networkidle2' });

    await page.waitForSelector('div.download', { timeout: 5000 }).catch(() => {
      console.warn(`Элемент <div.download> не найден на странице: ${url}`);
    });

    const linkHref = await page.evaluate(() => {
      const linkElement = document.querySelector('div.download a');
      return linkElement ? linkElement.href : undefined; // Если <a> существует, возвращаем href, иначе возвращаем исходный URL
    });
    await page.goBack({ waitUntil: 'networkidle2' });
    return linkHref;
  } catch (error) {
    console.error(`Ошибка при получении href: ${error.message}`);
    return undefined; // В случае ошибки возвращаем исходный URL
  }
};


