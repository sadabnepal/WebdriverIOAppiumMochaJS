const { APP_PACKAGE } = require("../../static/constants")
const { scrollHorizontally } = require("../base.page")

class GalleryPage {

    async openGalleryPage() {
        await driver.startActivity(APP_PACKAGE, ".view.Gallery1")
    }

    async scrollGalleryHorizontally() {
        await scrollHorizontally()
    }

}
module.exports = new GalleryPage()