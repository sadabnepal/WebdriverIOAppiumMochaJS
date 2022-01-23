import { APP_PACKAGE } from "../../static/constants"
import BasePage from "../base.page"

class GalleryPage {

    async openGalleryPage() {
        await driver.startActivity(APP_PACKAGE, ".view.Gallery1")
    }

    async scrollGalleryHorizontally() {
        await BasePage.scrollHorizontally()
    }

}
export default new GalleryPage()