class GlobalPage {
    get yourFeedLink() { return $('a.nav-link=Your Feed'); }
    get globalFeedLink() { return $('div.feed-toggle > ul > li:nth-child(2)');}
    get yourFeedLink() { return $('div.feed-toggle > ul > li:nth-child(1)');}
    get articlePreviews() { return $$('.article-preview .preview-link');}
    
    async open() {
        await browser.url('/');
    }
    async clickYourFeedLink(){
        await this.yourFeedLink.click();
    }

    async clickSpecificArticle(index) {
        const articles = await this.articlePreviews;
        if (articles.length > index) {
            await articles[index].click();
        } else {
            throw new Error(`No article found at index ${index}`);
        }
    }

    async isGlobalFeedLinkPresent() {
        return this.globalFeedLink.isDisplayed();
    }
}

module.exports = new GlobalPage();
