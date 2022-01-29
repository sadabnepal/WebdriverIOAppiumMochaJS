import basePage from "../base.page"

class MainMenuPage {
    get appNameHeader() { return $('android.widget.TextView') }
    get allMenuItemsElements() { return $$(".android.widget.TextView") }
    get appMenuElement() { return $('~App') }
    get viewsMenuElement() { return $('~Views') }

    async openMainMenu() {
        await basePage.openUsingPackage(".ApiDemos")
    }

    async clickOnAppMenu() {
        await this.appMenuElement.click();
    }

    async clickOnViewsMenu() {
        await this.viewsMenuElement.click()
    }
}
export default new MainMenuPage()