import basePage from "../base.page"

class GalleryPage {

    async openGalleryPage() {
        await basePage.openUsingPackage(".view.Gallery1")
    }

    async scrollGalleryHorizontally() {
        await basePage.scrollHorizontally()
    }

}
export default new GalleryPage()