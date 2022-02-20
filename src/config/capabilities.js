import { ANDROID_APP_PATH } from "../constants/pathconstants";
import { ENV_READER } from "./env_reader";

export const singleAndroidDeviceCapabalities = [{
    platformName: "Android",
    "appium:platformVersion": ENV_READER.EMULATOR_DEVICE1_VERSION,
    "appium:deviceName": ENV_READER.EMULATOR_DEVICE1_NAME,
    "appium:systemPort": "8200",
    "appium:automationName": "UiAutomator2",
    "appium:app": ANDROID_APP_PATH,
    'appium:noReset': true,
    'appium:newCommandTimeout': 240,
    "appium:autoGrantPermissions": true,
    "appium:avd": ENV_READER.EMULATOR_DEVICE1_ID,
    "appium:avdLaunchTimeout": 180000
}]

export const multiAndroidDeviceCapabalities = [
    ...singleAndroidDeviceCapabalities,
    {
        platformName: "Android",
        "appium:platformVersion": ENV_READER.EMULATOR_DEVICE2_VERSION,
        "appium:deviceName": ENV_READER.EMULATOR_DEVICE2_NAME,
        "appium:systemPort": "8201",
        "appium:automationName": "UiAutomator2",
        "appium:app": ANDROID_APP_PATH,
        'appium:noReset': true,
        'appium:newCommandTimeout': 240,
        "appium:autoGrantPermissions": true,
        "appium:avd": ENV_READER.EMULATOR_DEVICE2_ID,
        "appium:avdLaunchTimeout": 180000
    }
]

export const androidBrowserStackCapabalities = [{
    project: "Webdriverio Android Project",
    build: "browserstack-build-1",
    name: "single_test",
    device: ENV_READER.BROWSERSTACK_ANDROID_DEVICE,
    os_version: ENV_READER.BROWSERSTACK_ANDROID_VERSION,
    app: ENV_READER.BROWSERSTACK_ANDROID_APP_ID,
    'browserstack.debug': true
}]

export const iosBrowserStackCapabalities = [{
    project: "First Webdriverio iOS Project",
    build: "browserstack-build-1",
    name: "single_test",
    device: ENV_READER.BROWSERSTACK_IOS_DEVICE,
    os_version: ENV_READER.BROWSERSTACK_IOS_VERSION,
    app: ENV_READER.BROWSERSTACK_IOS_APP_ID,
    'browserstack.debug': true
}]