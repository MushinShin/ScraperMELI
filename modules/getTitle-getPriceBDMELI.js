import { MELI_CLASSES, DB_CLASSES } from './selectorCONSTS.js';


export async function GET_TITLES(page) {

    await page.waitForSelector(DB_CLASSES.titleBD);
    const TITLES = await page.$$eval(DB_CLASSES.titleBD, (titles) => 
        titles.map((title) => title.textContent)
    );
    return await TITLES;
}

export async function GET_PRICES(page) {
    const PRICES = [];

    document.querySelectorAll(DB_CLASSES.priceBD).forEach((price) => {
        const priceTxt = price.innerText();
        if (priceTxt) {
            PRICES.push(priceTxt);
        }
    })
    return PRICES;
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