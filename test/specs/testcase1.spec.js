const SignUpPage = require('../pages/SignUpPage');
const { generateRandomUsername, generateRandomEmail, generateRandomPassword } = require('../utils/generateData');
const testData = require('../data/users.json');
const GlobalPage = require('../pages/GlobalPage');

describe('Sign Up Tests', () => {

    beforeEach(async () => {
        await SignUpPage.open();
    });

    it('Verify Sign up with valid data', async () => {
        const randomUsername = generateRandomUsername();
        const randomEmail = generateRandomEmail();
        const randomPassword = generateRandomPassword();

        await SignUpPage.signUp(randomUsername, randomEmail, randomPassword);
        
        testData.validUser.username = randomUsername;
        testData.validUser.email = randomEmail;
        testData.validUser.password = randomPassword;
        const fs = require('fs');
        fs.writeFileSync('./test/data/users.json', JSON.stringify(testData, null, 2));
        await browser.pause(2000);
        await expect(GlobalPage.globalFeedLink).toBeDisplayed();
    });
})