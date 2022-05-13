export function getThogether(titles, prices, urls) {
    let completeBooks = new Map();

    for (let i = 0; i < prices.lenght; i++) {
        completeBooks.set(prices[i], titles[i]);
    }

    return completeBooks;
}