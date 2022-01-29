import BasePage from "../base.page"

class GalleryPage extends BasePage {

    async openGalleryPage() {
        await this.openUsingPackage(".view.Gallery1")
    }

    async scrollGalleryHorizontally() {
        await this.scrollHorizontally()
    }

}
export default new GalleryPage()