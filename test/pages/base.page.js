class BasePage {

    findByTextContains(partialText) {
        return $(`android=new UiSelector().textContains("${partialText}")`);
    }

    async scrollAndClickByText(text) {
        await $(`android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("${text}")`).click();
    }

    async scrollHorizontally() {
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward(2)');
    }

}
module.exports = new BasePage()