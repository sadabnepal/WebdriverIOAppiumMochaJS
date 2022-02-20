import { join } from 'path';

export const ANDROID_APP_PATH = join(process.cwd(), 'src', 'app', 'android', 'ApiDemos-debug.apk')
export const IOS_APP_PATH = join(process.cwd(), 'src', 'app', 'ios', 'bitbar-ios-sample.ipa')
export const MOCHA_ANDROID_OUTPUT_DIR = "reports/android/mocha/";
export const MOCHA_IOS_OUTPUT_DIR = "reports/ios/mocha/";