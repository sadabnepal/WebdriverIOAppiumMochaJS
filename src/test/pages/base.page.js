class BasePage {

    findByTextContains(partialText) {
        return $(`android=new UiSelector().textContains("${partialText}")`);
    }

    async scrollAndClickByText(text) {
        await $(`android=new UiScrollable(new UiSelector()).scrollTextIntoView("${text}")`).click();
    }

    async scrollHorizontally() {
        await $('android=new UiScrollable(new UiSelector()).setAsHorizontalList().scrollForward(2)');
    }

}
export default new BasePage()