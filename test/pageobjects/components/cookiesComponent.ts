export class CoockiesComponent {
    //Searching by text is bad due to potential language/text changes
    //but did it this way not to get stuck
    private get cookiesComponentHeadingText() {
        return $('h2=Allow optional cookies?');
    }
    private get acceptCookiesBtn() {
        return $('button=Accept');
    }
    async closeCookies() {
        if (await this.cookiesComponentHeadingText.isDisplayed()) {
            await this.acceptCookiesBtn.click();
        }
    }
}
