import { MELI_CLASSES, DB_CLASSES, MELI_URL, DB_URL } from './modules/selectorCONSTS.js';
import { GET_PRICES, GET_TITLES, GET_URL, SEARCH_PRODUCT} from './modules/getTitle-getPriceBDMELI.js';
import { getThogether } from './modules/getChepeastest.js';
import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({headless: false, slowMo: 15,});
  const page = await browser.newPage();
  // Next line of code is the webpage scrapy will capture data from
  await page.goto(DB_URL);
  await SEARCH_PRODUCT(page);
  await page.waitForNavigation;
  const titles = await GET_TITLES(page);
  // console.log(titles);
  const prices = await GET_PRICES(page);
  // console.log(prices);
  const urls = await GET_URL(page);
  // console.log(urls);
  const complete = getThogether(titles, prices, urls);
  console.log(complete)
  


  // await browser.close();
})();