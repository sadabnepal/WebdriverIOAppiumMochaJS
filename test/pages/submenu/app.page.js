const { findByTextContains } = require("../base.page")

class AppMenuPage {
    get actionBar() { return $('~Action Bar') }
    get alertDialougeElement() { return findByTextContains("Alert") }

    async clickOnAlertMenu() {
        await this.alertDialougeElement.click();
    }
}
module.exports = new AppMenuPage()