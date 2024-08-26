const SignInPage = require('../pages/SignInPage');
const GlobalPage = require('../pages/GlobalPage');
const HeaderPage = require('../pages/HeaderPage');

describe('Verify clicking "Home" link redirects to Global Feed page', () => {
    beforeEach(async () => {
        await SignInPage.open();
    });

    it('should redirect to Global Feed page after clicking the Home link', async () => {
        await HeaderPage.clickHomeLink();
        await expect(GlobalPage.globalFeedLink).toBeDisplayed();
    });
});
