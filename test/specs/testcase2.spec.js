const SignUpPage = require('../pages/SignUpPage');
const { generateRandomUsername, generateRandomEmail, generateRandomPassword } = require('../utils/generateData');
const testData = require('../data/users.json');

describe('Sign Up Tests', () => {

    beforeEach(async () => {
        await SignUpPage.open();
    });
    it('Verify Sign up with empty "Username" field', async () => {
        const randomEmail = generateRandomEmail();
        const randomPassword = generateRandomPassword();

        await SignUpPage.inputEmail.setValue(randomEmail);
        await SignUpPage.inputPassword.setValue(randomPassword);

        const isButtonEnabled = await SignUpPage.isSignUpButtonEnabled();
        await expect(isButtonEnabled).toBe(false);
    });

})