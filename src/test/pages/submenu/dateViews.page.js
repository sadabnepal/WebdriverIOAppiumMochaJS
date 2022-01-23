import BasePage from "../base.page"

class DateViewPage {

    get dateWidgetMenu() { return $('~Date Widgets') }
    get dialogOption() { return $('~1. Dialog') }
    get dateElement() { return $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]'); }
    get changeDateButton() { return $('~change the date') }
    get dateOKButton() { return $('//android.widget.Button[@text="OK"]') }

    async selectDay(day) {
        await $(`//android.view.View[@text='${day}']`).click()
    }

    async openDateDialougeMenu() {
        await this.dateWidgetMenu.click()
        await this.dialogOption.click()
    }

    async scrollToNextMonthAndSelectDay(day) {
        await BasePage.scrollHorizontally()
        await this.selectDay(day)
        await this.dateOKButton.click()
    }

}
export default new DateViewPage()