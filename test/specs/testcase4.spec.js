const SignUpPage = require('../pages/SignUpPage');
const { generateRandomUsername, generateRandomEmail, generateRandomPassword } = require('../utils/generateData');
const testData = require('../data/users.json');

describe('Sign Up Tests', () => {

    beforeEach(async () => {
        await SignUpPage.open();
    });
    it('Verify Sign up with empty "Password" field', async () => {
        const randomUsername = generateRandomUsername();
        const randomEmail = generateRandomEmail();

        await SignUpPage.inputUsername.setValue(randomUsername);
        await SignUpPage.inputEmail.setValue(randomEmail);

        const isButtonEnabled = await SignUpPage.isSignUpButtonEnabled();
        await expect(isButtonEnabled).toBe(false);
    });
})