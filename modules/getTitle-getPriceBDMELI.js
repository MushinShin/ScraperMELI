import { MELI_CLASSES, DB_CLASSES } from './modules/selectorCONSTS.js';


export async function GET_TITLES(page) {

    return await page.evaluate(async () => {
        const TITLES = [];

        document.querySelectorAll("titlesclass").forEach((title) => {
            const titleTxt = title.innerText();
            if (titleTxt) {
                TITLES.push(titleTxt);
            }
        })
        return TITLES;
    })

}

export async function GET_PRICES(page) {

    return await page.evaluate(async () => {
        const PRICES = [];

        document.querySelectorAll("pricesclass").forEach((price) => {
            const priceTxt = price.innerText();
            if (priceTxt) {
                PRICES.push(priceTxt);
            }
        })
        return PRICES;
    })
}

export async function GET_URL(page) {
    
    return await page.evaluate(async () => {
        const URLS = [];

        document.querySelectorAll("urlclass").forEach((url) => {
            const HREF = url.getAttribute("href");
            if (HREF) {
                URLS.push(HREF);
            }
        })
        return URLS;
    })
}

export async function SEARCH_PRODUCT(page) {

    return await page.evaluate(async () => {
         await page.type(DB_CLASSES.inputDB, "Mistborn Trilogy");
         await page.click(DB_CLASSES.searchBTN_DB);
    })
}