import { ANDROID_APP_PATH } from "../test/static/pathconstants";
require('dotenv').config();

export const singleAndroidDeviceCapabalities = [
    {
        platformName: "Android",
        "appium:platformVersion": "11",
        "appium:deviceName": "Pixel 3",
        "appium:systemPort": "8200",
        "appium:automationName": "UiAutomator2",
        "appium:app": ANDROID_APP_PATH,
        'appium:noReset': true,
        'appium:newCommandTimeout': 240,
        "appium:autoGrantPermissions": true
    }
]

export const multiAndroidDeviceCapabalities = [
    ...singleAndroidDeviceCapabalities,
    {
        platformName: "Android",
        "appium:platformVersion": "10",
        "appium:deviceName": "Nexus 6",
        "appium:systemPort": "8201",
        "appium:automationName": "UiAutomator2",
        "appium:app": ANDROID_APP_PATH,
        'appium:noReset': true,
        'appium:newCommandTimeout': 240,
        "appium:autoGrantPermissions": true
    }
]

export const androidBrowserStackCapabalities = [{
    project: "Webdriverio Android Project",
    build: "browserstack-build-1",
    name: "single_test",
    device: process.env.BROWSERSTACK_ANDROID_DEVICE,
    os_version: process.env.BROWSERSTACK_ANDROID_VERSION,
    app: process.env.BROWSERSTACK_ANDROID_APP_ID,
    'browserstack.debug': true
}]

export const iosBrowserStackCapabalities = [{
    project: "First Webdriverio iOS Project",
    build: "browserstack-build-1",
    name: "single_test",
    device: process.env.BROWSERSTACK_IOS_DEVICE,
    os_version: process.env.BROWSERSTACK_IOS_VERSION,
    app: process.env.BROWSERSTACK_IOS_APP_ID,
    'browserstack.debug': true
}]