import { MELI_CLASSES, DB_CLASSES } from './selectorCONSTS.js';


export async function GET_TITLES(page) {

    await page.waitForSelector(DB_CLASSES.titleBD);
    const TITLES = await page.$$eval(DB_CLASSES.titleBD, (titles) => 
        titles.map((title) => title.textContent.trim())
    );
    return await TITLES;
}

export async function GET_PRICES(page) {

    await page.waitForSelector(DB_CLASSES.priceBD);
    const PRICES = await page.$$eval(DB_CLASSES.priceBD, (prices) => 
        prices.map((price) => price.textContent.trim())
    );
    return await PRICES;
}

export async function GET_URL(page) {
    const URLS = [];

    document.querySelectorAll(DB_CLASSES.produDB_URL).forEach((url) => {
        const HREF = url.getAttribute("href");
        if (HREF) {
            URLS.push(HREF);
        }
    })
    return URLS;
}

export async function SEARCH_PRODUCT(page) {
    console.log("hola");
    await page.type(DB_CLASSES.inputDB, "Mistborn Trilogy");
    await page.click(DB_CLASSES.searchBTN_DB);
}