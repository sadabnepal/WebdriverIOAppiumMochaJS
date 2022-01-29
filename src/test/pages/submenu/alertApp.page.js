import basePage from "../base.page"

class AlertAppPage {
    get listDialougElement() { return $("//*[@content-desc='List dialog']") }
    get commandTwoElement() { return $("//*[@text='Command two']") }
    get commandTwoMsgElement() { return $('//*[@resource-id="android:id/message"]') }
    get okCancelElement() { return $('~OK Cancel dialog with a message') }
    get alertTitleElement() { return $('//*[@resource-id="android:id/alertTitle"]') }

    async openAlertPage() {
        await basePage.openUsingPackage(".app.AlertDialogSamples")
    }

    async navigateToCommandTwoPopup() {
        await this.openAlertPage()
        await this.listDialougElement.click();
        await this.commandTwoElement.click();
    }

    async clickOnOkCancelDialouge() {
        await this.okCancelElement.click();
    }
}
export default new AlertAppPage()