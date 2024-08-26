const SettingsPage = require('../pages/SettingsPage');
const GlobalPage = require('../pages/GlobalPage');
const SignInPage = require('../pages/SignInPage');
const HeaderPage = require('../pages/HeaderPage');
const users = require('../data/users.json');

describe('Logout functionality', () => {
    beforeEach(async () => {
        await SignInPage.open();
    });

    it('should redirect to Global Feed and display Sign in button after logout', async () => {
        await SignInPage.enterEmail(users.validUser.email);
        await SignInPage.enterPassword(users.validUser.password);
        await SignInPage.clickSignIn();
        await expect(GlobalPage.globalFeedLink).toBeDisplayed();
        await SettingsPage.open();
        await SettingsPage.clickLogout();
        await expect(HeaderPage.signInLink).toBeDisplayed();
    });
});