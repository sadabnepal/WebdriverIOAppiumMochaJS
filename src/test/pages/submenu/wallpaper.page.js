import BasePage from "../base.page"

class WallpaperPage {

    async scrollAndclickOnWallpaperMenu() {
        await BasePage.scrollAndClickByText('Wallpaper')
    }

    get wallpaperTextElement() { return $('//*[@resource-id="io.appium.android.apis:id/text"]') }

}
export default new WallpaperPage()