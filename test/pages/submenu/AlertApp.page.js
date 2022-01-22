class AlertAppPage {
    get listDialougElement() { return $("//android.widget.Button[@content-desc='List dialog']") }
    get commandTwoElement() { return $("//android.widget.TextView[@text='Command two']") }
    get commandTwoMsgElement() { return $('//android.widget.TextView') }

    async navigateToCommandTwoPopup() {
        await driver.startActivity("io.appium.android.apis", ".app.AlertDialogSamples")
        await this.listDialougElement.click();
        await this.commandTwoElement.click();
    }
}
module.exports = new AlertAppPage(0)