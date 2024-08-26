const GlobalPage = require('../pages/GlobalPage');
const ArticlePage = require('../pages/ArticlePage');
const SignInPage = require('../pages/SignInPage');
const users = require('../data/users.json');

describe('Verify adding article to Favorited Articles', () => {
    beforeEach(async () => {
        await SignInPage.open();
    });

    it('should add an article to Favorited Articles', async () => {
        await SignInPage.enterEmail(users.validUser.email);
        await SignInPage.enterPassword(users.validUser.password);
        await SignInPage.clickSignIn();
        await expect(GlobalPage.globalFeedLink).toBeDisplayed();
        await GlobalPage.clickSpecificArticle(2);
        await ArticlePage.clickFavoriteArticle();
        await browser.pause(5000);
        await expect(ArticlePage.unfavoriteButton).toBeDisplayed();
    });
});
