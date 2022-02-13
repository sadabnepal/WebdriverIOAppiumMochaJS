import { ANDROID_APP_PATH } from "../test/static/pathconstants";
require('dotenv').config();

export const singleAndroidDeviceCapabalities = [
    {
        platformName: "Android",
        "appium:platformVersion": process.env.EMULATOR_DEVICE1_VERSION,
        "appium:deviceName": process.env.EMULATOR_DEVICE1_NAME,
        "appium:systemPort": "8200",
        "appium:automationName": "UiAutomator2",
        "appium:app": ANDROID_APP_PATH,
        'appium:noReset': true,
        'appium:newCommandTimeout': 240,
        "appium:autoGrantPermissions": true,
        "appium:avd": process.env.EMULATOR_DEVICE1_ID,
        "appium:avdLaunchTimeout": 180000
    }
]

export const multiAndroidDeviceCapabalities = [
    ...singleAndroidDeviceCapabalities,
    {
        platformName: "Android",
        "appium:platformVersion": process.env.EMULATOR_DEVICE2_VERSION,
        "appium:deviceName": process.env.EMULATOR_DEVICE2_NAME,
        "appium:systemPort": "8201",
        "appium:automationName": "UiAutomator2",
        "appium:app": ANDROID_APP_PATH,
        'appium:noReset': true,
        'appium:newCommandTimeout': 240,
        "appium:autoGrantPermissions": true,
        "appium:avd": process.env.EMULATOR_DEVICE2_ID,
        "appium:avdLaunchTimeout": 180000
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