const { scrollAndClickByText } = require("../base.page")

class WallpaperPage {

    async scrollAndclickOnWallpaperMenu() {
        await scrollAndClickByText('Wallpaper')
    }

    get wallpaperTextElement() { return $('//*[@resource-id="io.appium.android.apis:id/text"]') }

}
module.exports = new WallpaperPage()