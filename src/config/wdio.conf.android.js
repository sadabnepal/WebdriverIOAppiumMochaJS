import { singleAndroidDeviceCapabalities, multiAndroidDeviceCapabalities } from './capabilities';
import { MOCHA_ANDROID_OUTPUT_DIR } from '../constants/pathconstants';
import { config as sharedconfig } from './wdio.conf.shared';

export const config = {
    ...sharedconfig,
    // ====================
    // Runner Configuration
    // ====================
    port: 4723,
    // ==================
    // Specify Test Files
    // ==================
    specs: [
        './src/test/specs/andriodDemoApp.spec.js'
    ],
    exclude: [],
    // ============
    // Capabilities
    // ============
    capabilities: process.env.RUN_MODE == 'parallel' ? multiAndroidDeviceCapabalities : singleAndroidDeviceCapabalities,
    // ===================
    // Test Configurations
    // ===================
    services: ['appium'],
    reporters: [
        'spec',
        ['mochawesome', {
            outputDir: MOCHA_ANDROID_OUTPUT_DIR,
            outputFileFormat: (opts) => {
                return `results-${opts.cid}.${opts.capabilities.platformName}.json`
            }
        }]
    ],
    // =====
    // Hooks
    // =====
    // eslint-disable-next-line no-unused-vars
    onComplete: function (exitCode, config, capabilities, results) {
        const mergeResults = require('wdio-mochawesome-reporter/mergeResults')
        mergeResults(MOCHA_ANDROID_OUTPUT_DIR, "results-*");
    },
}
