const { newsAPIkey } = require('./../config');

const url = 'https://newsapi.org/v2/top-headlines?country=ro&apiKey=' + newsAPIkey;

export async function getNews() {
    let result = await fetch(url).then(response => response.json());
    return result.articles;
}