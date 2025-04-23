const headerPage = require('../page/headers.page.js')


describe("Should check the colculation of costs for Neolit.ua website" , async () => {
    
    it('Go to website https://neolit.ua/ua/', async () => {
        await browser.url('https://neolit.ua/ua/');
        await browser.maximizeWindow();
        await browser.pause(100);
        })

   
    it('Should check the calc form', 
        async () => {
        
        await headerPage.calcClick();
        await browser.pause(100);

        await headerPage.textCacl();
        await browser.pause(100);

        await headerPage.seaClickable();
        await browser.pause(100);

        await headerPage.seaClick();
        await browser.pause(100);

        await headerPage.seaReq();
        await browser.pause(100);

        await headerPage.setCompanyName();
        await browser.pause(100);

        await headerPage.setPhoneNumb();
        await browser.pause(100);

        await headerPage.setCargoName();
        await browser.pause(100);

        await headerPage.setloadingPort();
        await browser.pause(100);

        await headerPage.setUnloadingPort();
        await browser.pause(100);

        await headerPage.clickTemrs();
        await browser.pause(100);

        await headerPage.clickCIP();
        await browser.pause(100);

        await headerPage.moreScroll();
        await browser.pause(100);

        await headerPage.moreClick();
        await browser.pause(100);

        await headerPage.hazard();
        await browser.pause(100);

        await headerPage.selectHazard();
        await browser.pause(100);

        await headerPage.container();
        await browser.pause(100);

        await headerPage.selectContainer();
        await browser.pause(100);

        await headerPage.setEmail();
        await browser.pause(100);

        await headerPage.containersCount();
        await browser.pause(100);

        await headerPage.setDescription();
        await browser.pause(100);

        await headerPage.submitClick();
        await browser.pause(100);

        await headerPage.confirmedText();
        await browser.pause(100);

        await headerPage.managerTime();
        await browser.pause(100);

        })

        }   
)
