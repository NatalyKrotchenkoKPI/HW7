class HeaderPage {
    get logo() { return $('a.navbar-brand'); }
    get homeLink() { return $('a.nav-link=Home'); }
    get signInLink() { return $('[href="/login"]');}

    async clickHeaderLogo() {
        await this.logo.click();
    }
    async clickHomeLink() {
        await this.homeLink.click();
    }
}

module.exports = new HeaderPage();
