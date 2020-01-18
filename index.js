const argv = require('yargs').argv;
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(argv.url);
  const result = await page.evaluate(({ clickQuery, query }) => {
      if (clickQuery) {
        document.querySelector(clickQuery).click();
      }
      return document.querySelector(query).innerText;
  }, { click: argv.clickQuery, query: argv.query });
  await page.screenshot({path: 'example.png'});
  console.log(result);
  await browser.close();
})();