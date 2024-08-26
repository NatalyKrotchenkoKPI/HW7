const SignInPage = require('../pages/SignInPage');
const users = require('../data/users.json');
const GlobalPage = require('../pages/GlobalPage');

describe('Sign in functionality', () => {
    
    beforeEach(async () => {
        await SignInPage.open();
    });

    it('should sign in with valid data', async () => {
        await SignInPage.enterEmail(users.validUser.email);
        await SignInPage.enterPassword(users.validUser.password);
        await SignInPage.clickSignIn();
        await expect(GlobalPage.globalFeedLink).toBeDisplayed();
    });
})