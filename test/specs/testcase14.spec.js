const SignInPage = require('../pages/SignInPage');
const GlobalPage = require('../pages/GlobalPage');
const FooterPage = require('../pages/FooterPage');

describe('Verify clicking footer logo redirects to Global Feed page', () => {
    beforeEach(async () => {
        await SignInPage.open();
    });

    it('should redirect to Global Feed page after clicking the footer logo', async () => {

        await FooterPage.clickFooterLogo();
        await expect(GlobalPage.globalFeedLink).toBeDisplayed();
    });
});
