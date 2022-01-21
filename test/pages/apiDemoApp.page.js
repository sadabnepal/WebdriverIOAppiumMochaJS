const { findByTextContains } = require("./base.page")

class APIDemoApp {

    get appname() { return $('android.widget.TextView') }
    get allMenuItemsElements() { return $$(".android.widget.TextView") }
    get appMenu() { return $('~App') }
    get actionBar() { return $('~Action Bar') }

    get alertDialougeElement() { return findByTextContains("Alert") }
    get listDialougElement() { return $("//android.widget.Button[@content-desc='List dialog']") }
    get commandTwoElement() { return $("//android.widget.TextView[@text='Command two']") }
    get commandTwoMsgElement() { return $('//android.widget.TextView') }

    get viewsMenuElement() { return $('~Views') }
    get autocompleteViewSubMenuElement() { return $('~Auto Complete') }
    get screenTopElement() { return $('//*[@content-desc="1. Screen Top"]') }
    get countryInputElement() { return $('//*[@resource-id="io.appium.android.apis:id/edit"]') }

    async clickOnAppMenu() {
        await this.appMenu.click();
    }

    async navigateToCommandTwoPopup() {
        await this.alertDialougeElement.click();
        await this.listDialougElement.click();
        await this.commandTwoElement.click();
    }
    
    async navigateBackToMainMenu() {
        await browser.back();
        await browser.back();
        await browser.back();
    }
}
module.exports = new APIDemoApp()