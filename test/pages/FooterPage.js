class FooterPage {
    get logo() { return $('[class=logo-font]'); }
    get realWorldLink() { return $('[href="https://github.com/gothinkster/realworld"]')}

    async clickFooterLogo() {
        await this.logo.click();
    }
    async clickRealWorldLink() {
        await this.realWorldLink.click();
    }
}

module.exports = new FooterPage();
