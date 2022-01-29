import BasePage from "../base.page"

class AppMenuPage extends BasePage {
    get actionBar() { return $('~Action Bar') }
    get activitySubMenu() { return $('~Activity') }

    async clickOnActivityMenu() {
        await this.activitySubMenu.click()
    }

}
export default new AppMenuPage()