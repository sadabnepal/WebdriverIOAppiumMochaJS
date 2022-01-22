const { APP_PACKAGE } = require("../../static/constants")

class AlertAppPage {
    get listDialougElement() { return $("//*[@content-desc='List dialog']") }
    get commandTwoElement() { return $("//*[@text='Command two']") }
    get commandTwoMsgElement() { return $('//*[@resource-id="android:id/message"]') }
    get okCancelElement() { return $('~OK Cancel dialog with a message') }
    get alertTitleElement() { return $('//*[@resource-id="android:id/alertTitle"]') }

    async openAlertPage() {
        await driver.startActivity(APP_PACKAGE, ".app.AlertDialogSamples")
    }

    async navigateToCommandTwoPopup() {
        await this.openAlertPage()
        await this.listDialougElement.click();
        await this.commandTwoElement.click();
    }

    async clickOnOkCancelDialouge() {
        await this.openAlertPage()
        await this.okCancelElement.click();
    }
}
module.exports = new AlertAppPage(0)