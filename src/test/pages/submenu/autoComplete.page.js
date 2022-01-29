import BasePage from "../base.page"

class AutoCompletePage extends BasePage {
    get countryInputElement() { return $('//*[@resource-id="io.appium.android.apis:id/edit"]') }

    async openCountryInputPage() {
        await this.openUsingPackage(".view.AutoComplete1")
    }
}
export default new AutoCompletePage()