class ViewsAppPage {
    get autocompleteViewSubMenuElement() { return $('~Auto Complete') }
    get screenTopElement() { return $('//*[@content-desc="1. Screen Top"]') }
    get countryInputElement() { return $('//*[@resource-id="io.appium.android.apis:id/edit"]') }
}
module.exports = new ViewsAppPage()