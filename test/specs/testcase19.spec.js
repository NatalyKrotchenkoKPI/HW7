const GlobalPage = require('../pages/GlobalPage');
const SignInPage = require('../pages/SignInPage');

describe('Verify the "Your Feed" link when user is logged out', () => {
    beforeEach(async () => {
        await GlobalPage.open();
    });

    it('should redirect to Sign in page when "Your Feed" link is clicked', async () => {
        await GlobalPage.clickYourFeedLink();
        await browser.pause(2000);
        const currentUrl = await browser.getUrl();
        const expectedUrl = 'https://conduit.realworld.how/login'
        await expect(currentUrl).toBe(expectedUrl);
    });
});
