export const GET_TITLES = async (page) => {

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

export const GET_PRICES = async (page) => {

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

export const GET_URL = async (page) => {
    
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

// export const SEARCH_PRODUCT = async (page) => {

//     return await page.evaluate(async () => {
//         await page.type()
//     })
// }