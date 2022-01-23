const MainMenuPage = require('../pages/mainmenu/mainMenu.page');
const AlertAppPage = require('../pages/submenu/alertApp.page');
const AppMenuPage = require('../pages/submenu/app.page');
const AutoCompletePage = require('../pages/submenu/autoComplete.page');
const dateViewsPage = require('../pages/submenu/dateViews.page');
const GalleryPage = require('../pages/submenu/gallery.page');
const wallpaperPage = require('../pages/submenu/wallpaper.page');
const { APP_HEADER, COMMAND_TWO_POPUP_MSG, MENU_ITEMS, ALERT_TEXT, WALLPAPER_TEXT } = require('../static/constants');

describe('API Demo Android APP tests', () => {

    it('should validate app name', async () => {
        await expect(MainMenuPage.appNameHeader).toHaveText(APP_HEADER);
    })

    it('should validate all menu items', async () => {
        const actualMenuItems = await MainMenuPage.allMenuItemsElements.map(async menuItem => await menuItem.getText());
        expect(actualMenuItems).toEqual(MENU_ITEMS)
        expect(await MainMenuPage.allMenuItemsElements.length).toBeGreaterThan(0);
    })

    it('should open Action bar menu item', async () => {
        await MainMenuPage.clickOnAppMenu();
        await expect(AppMenuPage.actionBar).toBeExisting();
    })

    it('should validate command two menu with app activity', async () => {
        await AlertAppPage.navigateToCommandTwoPopup()
        await expect(AlertAppPage.commandTwoMsgElement).toHaveText(COMMAND_TWO_POPUP_MSG);
    })

    it('should validate screen top sendkeys', async () => {
        await AutoCompletePage.openCountryInputPage()
        await AutoCompletePage.countryInputElement.setValue('Nepal')
        await expect(AutoCompletePage.countryInputElement).toHaveText('Nepal')
    })

    it('should validate alert text and accept alert', async () => {
        await AlertAppPage.openAlertPage()
        await AlertAppPage.clickOnOkCancelDialouge()
        expect(await driver.getAlertText()).toEqual(ALERT_TEXT)
        await driver.acceptAlert()
        await expect(AlertAppPage.alertTitleElement).not.toExist()
    })

    it('should validate alert text and dismiss alert', async () => {
        await AlertAppPage.openAlertPage()
        await AlertAppPage.clickOnOkCancelDialouge()
        expect(await driver.getAlertText()).toEqual(ALERT_TEXT)
        await driver.dismissAlert()
        await expect(AlertAppPage.alertTitleElement).not.toExist()
    })

    it('should validate vertical scrolling', async () => {
        await MainMenuPage.openMainMenu()
        await MainMenuPage.clickOnAppMenu()
        await AppMenuPage.clickOnActivityMenu()
        await wallpaperPage.scrollAndclickOnWallpaperMenu()
        await expect(wallpaperPage.wallpaperTextElement).toHaveTextContaining(WALLPAPER_TEXT)
    })

    it('should validate horizontal scrolling', async () => {
        await GalleryPage.openGalleryPage()
        await GalleryPage.scrollGalleryHorizontally()
    })

    it('should validate next month date selection using scroll', async () => {
        await MainMenuPage.openMainMenu()
        await MainMenuPage.clickOnViewsMenu()
        await dateViewsPage.openDateDialougeMenu()
        const currentDate = await dateViewsPage.dateElement.getText()
        await dateViewsPage.changeDateButton.click()
        await dateViewsPage.scrollToNextMonthAndSelectDay(10)
        const updateDate = await dateViewsPage.dateElement.getText()
        expect(updateDate).not.toEqual(currentDate)
    })

})