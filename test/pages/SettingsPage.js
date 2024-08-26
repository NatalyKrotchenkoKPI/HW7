class SettingsPage {
    get settingsLink() { return $('a[href="/settings"]'); }
    get logoutButton() { return $('button*=click here to logout'); }

    async open() {
        await this.settingsLink.click();
    }
    async clickLogout() {
        await this.logoutButton.click();
    }
}

module.exports = new SettingsPage();
