const MainMenuPage = require('../pages/mainmenu/mainMenu.page');
const AlertAppPage = require('../pages/submenu/AlertApp.page');
const AppMenuPage = require('../pages/submenu/app.page');
const AutoCompletePage = require('../pages/submenu/autoComplete.page')
const { APP_HEADER, COMMAND_TWO_POPUP_MSG, MENU_ITEMS } = require('../pages/static/constants');

describe('Android element tests', () => {

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

})