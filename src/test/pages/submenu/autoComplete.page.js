import basePage from "../base.page"

class AutoCompletePage {
    get countryInputElement() { return $('//*[@resource-id="io.appium.android.apis:id/edit"]') }

    async openCountryInputPage() {
        await basePage.openUsingPackage(".view.AutoComplete1")
    }
}
export default new AutoCompletePage()