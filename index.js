const puppeteer = require('puppeteer');
const creds = require('./creds');

async function run(){

    const LOGIN_SELECTOR = '#pt-login a';
    const USER_INPUT = '#wpName1';
    const PASS_INPUT = '#wpPassword1';
    const SINGIN_BUTTON = '#wpLoginAttempt';

    const browser = await puppeteer.launch({
        headless:false
    });
    const page = await browser.newPage();

    await page.goto('https://vi.wikipedia.org/w/index.php?title=%C4%90%E1%BA%B7c_bi%E1%BB%87t:%C4%90%C4%83ng_nh%E1%BA%ADp&returnto=Trang+Ch%C3%ADnh');


    await page.click(USER_INPUT);
    await page.keyboard.type(creds.ussername);

    await page.click(PASS_INPUT);
    await page.keyboard.type(creds.password);

    await page.click(SINGIN_BUTTON);


    await page.screenshot({path:'wiki.png'});

}

run();