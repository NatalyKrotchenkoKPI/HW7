const SignUpPage = require('../pages/SignUpPage');
const { generateRandomUsername, generateRandomEmail, generateRandomPassword } = require('../utils/generateData');
const testData = require('../data/users.json');

describe('Sign Up Tests', () => {

    beforeEach(async () => {
        await SignUpPage.open();
    });
    it('Verify Sign up with empty "Email" field', async () => {
        const randomUsername = generateRandomUsername();
        const randomPassword = generateRandomPassword();

        await SignUpPage.inputUsername.setValue(randomUsername);
        await SignUpPage.inputPassword.setValue(randomPassword);

        const isButtonEnabled = await SignUpPage.isSignUpButtonEnabled();
        await expect(isButtonEnabled).toBe(false);
    });
})