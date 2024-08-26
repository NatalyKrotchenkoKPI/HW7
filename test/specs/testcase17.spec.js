const GlobalPage = require('../pages/GlobalPage');
const ArticlePage = require('../pages/ArticlePage');
const SignInPage = require('../pages/SignInPage');
const users = require('../data/users.json');

describe('Verify following other authors', () => {
    beforeEach(async () => {
        await SignInPage.open();
    });

    it('should follow another author from an article page', async () => {
        await SignInPage.enterEmail(users.validUser.email);
        await SignInPage.enterPassword(users.validUser.password);
        await SignInPage.clickSignIn();
        await expect(GlobalPage.globalFeedLink).toBeDisplayed();
        await GlobalPage.clickSpecificArticle(3);
        await ArticlePage.clickFollowButton();
        await browser.pause(2000);
        const buttonText = await ArticlePage.followButton.getText();
        expect(buttonText).toContain('Unfollow');
    });
});
