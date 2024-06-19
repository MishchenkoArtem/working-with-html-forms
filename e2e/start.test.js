import puppeteer from 'puppeteer';

describe('Page start', async () => {
    const browser = await puppeteer.launch(); 

    beforeEach(() => {
        browser = ({
            headless: false,
            slowMo: 100,
            devtools: true
        });
    });

    test('test', () => {});
});
