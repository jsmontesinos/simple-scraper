# Simple Scraper

This is an example scraper using [Puppeteer](https://github.com/puppeteer/puppeteer).

## How to install

Clone repository and run inside project directory:

```
npm i
```

This will install all the dependencies.

## How to run

The program accepts two mandatory parameters and one optional:

- **url**: The url to scrappe
- **query**: Element which value we are going to scrape (should be a text)
- **clickQuery** (optional): Element to click in, before scrapping

Example:

```
node index.js --url http://www.example.com --query "span[class='info']" --clickQuery "a[class='button']"
```


