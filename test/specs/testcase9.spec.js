const SignInPage = require('../pages/SignInPage');
const { generateRandomEmail, generateRandomPassword } = require('../utils/generateData');
const users = require('../data/users.json');

describe('Sign in functionality', () => {
    
    beforeEach(async () => {
        await SignInPage.open();
    });
    it('should display error message with invalid username and password', async () => {
        await SignInPage.enterEmail(generateRandomEmail());
        await SignInPage.enterPassword(generateRandomPassword());
        await SignInPage.clickSignIn();

        const errorMessage = await SignInPage.getErrorMessage();
        await expect(errorMessage).toContain('email or password is invalid');
    });

})