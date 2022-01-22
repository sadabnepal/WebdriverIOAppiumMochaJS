class MainMenuPage {
    get appNameHeader() { return $('android.widget.TextView') }
    get allMenuItemsElements() { return $$(".android.widget.TextView") }
    get appMenuElement() { return $('~App') }

    get viewsMenuElement() { return $('~Views') }

    async clickOnAppMenu() {
        await this.appMenuElement.click();
    }

    async clickOnViewsMenu() {
        await this.viewsMenuElement.click()
    }
}
module.exports = new MainMenuPage()