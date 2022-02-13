import BasePage from "../base.page"

class MainMenuPage extends BasePage {
    get appNameHeader() { return $('android.widget.TextView') }
    get allMenuItemsElements() { return $$("android.widget.TextView") }
    get appMenuElement() { return $('~App') }
    get viewsMenuElement() { return $('~Views') }

    async openMainMenu() {
        await this.openUsingPackage(".ApiDemos")
    }

    async clickOnAppMenu() {
        await this.appMenuElement.click();
    }

    async clickOnViewsMenu() {
        await this.viewsMenuElement.click()
    }
}
export default new MainMenuPage()