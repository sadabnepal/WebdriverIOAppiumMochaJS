const apiDemoAppPage = require("../pages/apiDemoApp.page")

describe('Android element tests', () => {

    it('should validate app name', async () => {
        await expect(apiDemoAppPage.appname).toHaveText('API Demos');
    })

    it('should validate menu items length is greate than zero', async () => {
        expect(await apiDemoAppPage.allMenuItemsElements.length).toBeGreaterThan(0);
    })

    it('should print all menu items', async () => {
        const expectedMenuItems = [
            'API Demos', 'Accessibility', 'Animation',
            'App', 'Content', 'Graphics',
            'Media', 'NFC', 'OS',
            'Preference', 'Text', 'Views'
        ]

        const actualMenuItems = await apiDemoAppPage.allMenuItemsElements.map(async menuItem => await menuItem.getText());
        expect(actualMenuItems).toEqual(expectedMenuItems)
    })

    it('should open Action bar menu item', async () => {
        await apiDemoAppPage.clickOnAppMenu();
        await expect(apiDemoAppPage.actionBar).toBeExisting();
        await driver.back();
    })

    it('should validate e2e tests', async () => {
        await apiDemoAppPage.clickOnAppMenu();
        await apiDemoAppPage.navigateToCommandTwoPopup()
        await expect(apiDemoAppPage.commandTwoMsgElement).toHaveText('You selected: 1 , Command two');
        await apiDemoAppPage.navigateBackToMainMenu()
    })

    it('should validate screen top sendkeys', async () => {
        await apiDemoAppPage.viewsMenuElement.click();
        await apiDemoAppPage.autocompleteViewSubMenuElement.click();
        await apiDemoAppPage.screenTopElement.click();
        await apiDemoAppPage.countryInputElement.setValue('Nepal')
        await expect(apiDemoAppPage.countryInputElement).toHaveText('Nepal')
    })

})