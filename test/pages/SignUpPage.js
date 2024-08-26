class SignUpPage {
    get inputUsername() { return $('[formcontrolname=username]'); }
    get inputEmail() { return $('[formcontrolname=email]'); }
    get inputPassword() { return $('[formcontrolname=password]'); }
    get btnSignUp() { return $('[type=submit]'); }
    get yourFeedLink(){}

    async open() {
        await browser.url('/register');
    }

    async signUp(username, email, password) {
        await this.inputUsername.setValue(username);
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.btnSignUp.click();
    }

    async isSignUpButtonEnabled() {
        return await this.btnSignUp.isEnabled();
    }
}

module.exports = new SignUpPage();
