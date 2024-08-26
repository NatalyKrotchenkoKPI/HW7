const SignInPage = require('../pages/SignInPage');
const FooterPage = require('../pages/FooterPage');

describe('Verify the "RealWorld OSS Project." link', () => {
    beforeEach(async () => {
        await SignInPage.open();
    });

    it('should redirect to the RealWorld OSS Project page', async () => {
        await FooterPage.clickRealWorldLink();
        const currentUrl = await browser.getUrl();
        const expectedUrl = 'https://github.com/gothinkster/realworld'
        await expect(currentUrl).toBe(expectedUrl);
    });
});
