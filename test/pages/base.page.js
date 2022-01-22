class BasePage {

    findByTextContains(partialText) {
        return $(`android=new UiSelector().textContains("${partialText}")`);
    }

    async navigateBackThreeTime() {
        await browser.back();
        await browser.back();
        await browser.back();
    }
}
module.exports = new BasePage