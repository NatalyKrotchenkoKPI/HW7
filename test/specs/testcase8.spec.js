const SignInPage = require('../pages/SignInPage');
const { generateRandomEmail, generateRandomPassword } = require('../utils/generateData');
const users = require('../data/users.json');

describe('Sign in functionality', () => {
    
    beforeEach(async () => {
        await SignInPage.open();
    });
    it('should not allow sign in with empty username', async () => {
        let randomPassword = generateRandomPassword();
        await SignInPage.enterPassword(randomPassword);

        const isButtonEnabled = await SignInPage.signInButton.isEnabled();
        await expect(isButtonEnabled).toBe(false);
    });

})