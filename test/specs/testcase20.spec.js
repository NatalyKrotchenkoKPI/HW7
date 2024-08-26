const SignInPage = require('../pages/SignInPage');
const SignUpPage = require('../pages/SignUpPage');

describe('Verify the "Need an Account?" link', () => {
    beforeEach(async () => {
        await SignInPage.open();
    });

    it('should redirect to the Sign Up page', async () => {
        await SignInPage.clickNeedAccountLink();
        await browser.pause(2000);
        const currentUrl = await browser.getUrl();
        const expectedUrl = 'https://conduit.realworld.how/register'
        await expect(currentUrl).toBe(expectedUrl);
    });
});
