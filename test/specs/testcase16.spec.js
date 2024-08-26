const GlobalPage = require('../pages/GlobalPage');
const ArticlePage = require('../pages/ArticlePage');
const { generateRandomComment } = require('../utils/generateData');
const SignInPage = require('../pages/SignInPage');
const users = require('../data/users.json');


describe('Verify posting comment', () => {
    beforeEach(async () => {
        await SignInPage.open();
    });

    it('should post a comment on an article', async () => {
        await SignInPage.enterEmail(users.validUser.email);
        await SignInPage.enterPassword(users.validUser.password);
        await SignInPage.clickSignIn();
        await expect(GlobalPage.globalFeedLink).toBeDisplayed();
        await GlobalPage.clickSpecificArticle(3);
        const comment = generateRandomComment();
        await ArticlePage.postComment(comment);
    });
});
