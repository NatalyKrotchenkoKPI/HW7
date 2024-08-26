class SignInPage {

    get emailInput() { return $('[formcontrolname=email]'); }
    get passwordInput() { return $('[formcontrolname=password]'); }
    get signInButton() { return $('[type="submit"]'); }
    get errorMessage() { return $('.error-messages li'); }
    get realWorldLink() { return $('[href="github.com/gothinkster/realworld"]'); }
    get needAccountLink() { return $('[href="/register"]'); }

    async clickNeedAccountLink() {
        await this.needAccountLink.click();
    }

    async enterEmail(email) {
        await this.emailInput.setValue(email);
    }

    async enterPassword(password) {
        await this.passwordInput.setValue(password);
    }

    async clickSignIn() {
        await this.signInButton.click();
    }

    async getErrorMessage() {
        return await this.errorMessage.getText();
    }

    async open() {
        await browser.url('/login');
    }
    
}

module.exports = new SignInPage();
