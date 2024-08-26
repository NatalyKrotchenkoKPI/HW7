const SignUpPage = require('../pages/SignUpPage');
const { generateRandomUsername, generateRandomEmail, generateRandomPassword } = require('../utils/generateData');
const testData = require('../data/users.json');

describe('Sign Up Tests', () => {

    beforeEach(async () => {
        await SignUpPage.open();
    });
    it('Verify Sign up with empty "Username", "Email" and "Password" fields', async () => {
        const isButtonEnabled = await SignUpPage.isSignUpButtonEnabled();
        await expect(isButtonEnabled).toBe(false);
    });
})