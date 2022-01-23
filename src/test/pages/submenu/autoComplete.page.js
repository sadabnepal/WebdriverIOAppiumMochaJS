import { APP_PACKAGE } from "../../static/constants"

class AutoCompletePage {
    get countryInputElement() { return $('//*[@resource-id="io.appium.android.apis:id/edit"]') }

    async openCountryInputPage() {
        await driver.startActivity(APP_PACKAGE, ".view.AutoComplete1")
    }
}
export default new AutoCompletePage()