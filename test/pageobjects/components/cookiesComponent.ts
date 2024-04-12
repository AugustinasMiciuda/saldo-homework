export class CoockiesComponent {
    //Searching by text is bad due to potential language/text changes
    //but did it this way not to get stuck
    private get cookiesComponentHeadingText() {
        return $('h2=Allow optional cookies?');
    }
    private get acceptCookiesButton() {
        return $('button=Accept');
    }
    async closeCookies() {
        await this.cookiesComponentHeadingText.waitForDisplayed();
        await this.acceptCookiesButton.click();
    }
}
