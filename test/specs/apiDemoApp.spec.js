const MainMenuPage = require('../pages/mainmenu/main_menu.page');
const AlertAppPage = require('../pages/submenu/alert_app.page');
const AppMenuPage = require('../pages/submenu/app.page');
const ViewsAppPage = require('../pages/submenu/views_app.page')
const BasePage = require('../pages/base.page')

describe('Android element tests', () => {

    it('should validate app name', async () => {
        await expect(MainMenuPage.appNameHeader).toHaveText('API Demos');
    })

    it('should validate all menu items', async () => {
        const expectedMenuItems = [
            'API Demos', 'Accessibility', 'Animation',
            'App', 'Content', 'Graphics',
            'Media', 'NFC', 'OS',
            'Preference', 'Text', 'Views'
        ]
        const actualMenuItems = await MainMenuPage.allMenuItemsElements.map(async menuItem => await menuItem.getText());

        expect(actualMenuItems).toEqual(expectedMenuItems)
        expect(await MainMenuPage.allMenuItemsElements.length).toBeGreaterThan(0);
    })

    it('should open Action bar menu item', async () => {
        await MainMenuPage.clickOnAppMenu();
        await expect(AppMenuPage.actionBar).toBeExisting();
        await driver.back();
    })

    it('should validate e2e tests', async () => {
        await MainMenuPage.clickOnAppMenu();
        await AppMenuPage.clickOnAlertMenu()
        await AlertAppPage.navigateToCommandTwoPopup()
        await expect(AlertAppPage.commandTwoMsgElement).toHaveText('You selected: 1 , Command two');
        await BasePage.navigateBackThreeTime()
    })

    it('should validate screen top sendkeys', async () => {
        await MainMenuPage.clickOnViewsMenu()
        await ViewsAppPage.autocompleteViewSubMenuElement.click();
        await ViewsAppPage.screenTopElement.click();
        await ViewsAppPage.countryInputElement.setValue('Nepal')
        await expect(ViewsAppPage.countryInputElement).toHaveText('Nepal')
        await BasePage.navigateBackThreeTime()
    })

})