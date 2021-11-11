const puppeteer=require("puppeteer");
let page;

// puppeteer launch

console.log("before");

const browserOpenPromise=puppeteer.launch({
    headless:false,
    defaultViewport:null,
    slowMo:true,
    // maximize the initial screen
    args:[
        '--start-maximized' 
     ]
});

browserOpenPromise.then(function(browser){
    const pagesArrayPromise=browser.pages();
    return pagesArrayPromise;
}).then(function(browserPages){
    page=browserPages[0];
    let gotoPromise=page.goto("https://www.google.com/");
    return gotoPromise;
}).then(function(){
    // waiting for element to appear on on the page
    let elementWaitPromise=page.waitForSelector("input[type='text']",{visible:true});
    return elementWaitPromise;
}).then(function(){
    // type any element on that page using selector
    let keysWillBeSendPromise = page.type("input[type='text']","codeforces");
    return keysWillBeSendPromise;
}).then(function(){
    // page.keyboard is used to type special characters
    let enterWillBePressed=page.keyboard.press("Enter");
    return enterWillBePressed;
}).then(function(){
    let elementWaitPromise=page.waitForSelector(".LC20lb.DKV0Md",{visible:true});
    return elementWaitPromise;
}).then(function(){
    // mouse click
    let keysWillBeSendPromise = page.click(".LC20lb.DKV0Md");
    return keysWillBeSendPromise;
})
.catch(function(err){
    console.log(err);
})

console.log("after");