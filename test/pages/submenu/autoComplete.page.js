const { APP_PACKAGE } = require("../../static/constants")

class AutoCompletePage {
    get countryInputElement() { return $('//*[@resource-id="io.appium.android.apis:id/edit"]') }

    async openCountryInputPage() {
        await driver.startActivity(APP_PACKAGE, ".view.AutoComplete1")
    }
}
module.exports = new AutoCompletePage()