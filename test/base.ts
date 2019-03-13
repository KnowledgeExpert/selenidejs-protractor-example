import { Browser } from 'selenidejs';
import { browser as protractorBrowser } from 'protractor';

export let browser: Browser;

beforeAll(async () => {
    browser = Browser
        .drivedBy(protractorBrowser.driver)
        .timeout(2000)
        .build();
});

afterAll(async () => {
    await browser.quit();
});