const SignInPage = require('../pages/SignInPage');
const HeaderPage = require('../pages/HeaderPage');
const GlobalPage = require('../pages/GlobalPage');

describe('Verify clicking header logo redirects to Global Feed page', () => {
    beforeEach(async () => {
        await SignInPage.open();
    });
    it('should redirect to Global Feed page after clicking the logo', async () => {
        await HeaderPage.clickHeaderLogo();
        await expect(GlobalPage.globalFeedLink).toBeDisplayed();
    });
});
