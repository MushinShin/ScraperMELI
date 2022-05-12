import { MELI_CLASSES, DB_CLASSES, MELI_URL, DB_URL } from './modules/selectorCONSTS.cjs';
import { GET_PRICES, GET_TITLES, GET_URL} from './modules/getTitle-getPriceBDMELI.cjs';
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  // Next line of code is the webpage scrapy will capture data from
  await page.goto(DB_URL);
  
  await page.type(DB_CLASSES.inputDB, "Mistborn Trilogy")

  


  await browser.close();
})();