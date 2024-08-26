class ArticlePage {
    get favoriteButton() { return $('button=Favorite Article'); }
    get unfavoriteButton() { return $('button=Unfavorite Article'); }
    get followButton() { return $('app-follow-button'); }
    get commentInput() { return $('textarea[placeholder="Write a comment..."]'); }
    get postCommentButton() { return $('button[type="submit"]'); }
    get commentList() { return $('div.card-block p'); }

    async clickFavoriteArticle() {
        await this.favoriteButton.click();
    }

    async clickFollowButton() {
        await this.followButton.click();
    }

    async postComment(comment) {
        await this.commentInput.setValue(comment);
        await this.postCommentButton.click();
    }

    async followAuthor() {
        if (await this.followButton.isDisplayed()) {
            await this.followButton.click();
        }
    }
}

module.exports = new ArticlePage();
