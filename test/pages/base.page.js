class BasePage {

    findByTextContains(partialText) {
        return $(`android=new UiSelector().textContains("${partialText}")`);
    }
}
module.exports = new BasePage