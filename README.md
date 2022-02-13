<h2 align="center"> Mobile Test Automation Framework | WebdriverIO | Appium </h2>


### Requirements:
[![NodeJs](https://img.shields.io/badge/-NodeJS-%23339933?logo=npm)](https://nodejs.org/en/download/)
[![Appium-Inspector](https://img.shields.io/badge/-Appium%20Inspector-662d91?logo=appium&logoColor=black)](https://github.com/appium/appium-inspector/releases)
[![AppiumDriver](https://img.shields.io/badge/-Appium%20Driver-662d91?logo=Appium&logoColor=white)](https://appiumpro.com/editions/122-installing-appium-20-and-the-driver-and-plugins-cli)
[![AndroidStudio](https://img.shields.io/badge/-Android%20Studio-3DDC84?logo=android-studio&logoColor=white)](https://developer.android.com/studio)
[![Java](https://img.shields.io/badge/-JDK-%23007396?logo=java&logoColor=black&)](https://www.oracle.com/java/technologies/downloads/)
[![VSCode](https://img.shields.io/badge/-Visual%20Studio%20Code-%233178C6?logo=visual-studio-code)](https://code.visualstudio.com/download)

### Getting Started:

#### Clone repository:
```bash
git clone https://github.com/sadabnepal/WebdriverIOAppiumMochaJS.git
Navigate to `WebdriverIOAppiumMochaJS`
```
Note: all npm command should be executed from root project folder.

#### Install dependencies:
```bash
npm install
```

#### Setup/Create virtual device on Android studio:
```
Pixel 3 [ Android v11 ]
Nexus 6 [ Android v10 ]
```

#### Verify appium drivers:
```
npm run list-driver

Sample output log of driver
-----------------------------
✔ Listing available drivers
- uiautomator2@1.75.0 [installed (NPM)]
- xcuitest [not installed]
```

If drivers are not installed then run below commnad as required:
```
npm run install-driver-android
npm run install-driver-ios
```

#### Verify all pre-requisite for android:
```
npm run android-doctor

Sample output log of configuration [ all option should be green checked]
-----------------------------
info AppiumDoctor Appium Doctor v.1.16.0
info AppiumDoctor ### Diagnostic for necessary dependencies starting ###
info AppiumDoctor  ✔ The Node.js binary was found at: C:\Program Files\nodejs\node.EXE
info AppiumDoctor  ✔ Node version is 14.17.3
info AppiumDoctor  ✔ ANDROID_HOME is set to:<APP_DATA_LOCAL_PATH>\Android\Sdk
info AppiumDoctor  ✔ JAVA_HOME is set to: <JDK_PATH>
info AppiumDoctor    Checking adb, android, emulator
info AppiumDoctor      'adb' is in <APP_DATA_LOCAL_PATH>\Android\Sdk\platform-tools\adb.exe
info AppiumDoctor      'android' is in <APP_DATA_LOCAL_PATH>\Android\Sdk\tools\android.bat
info AppiumDoctor      'emulator' is in <APP_DATA_LOCAL_PATH>\Android\Sdk\emulator\emulator.exe      
info AppiumDoctor  ✔ adb, android, emulator exist: <APP_DATA_LOCAL_PATH>\Android\Sdk
info AppiumDoctor  ✔ 'bin' subfolder exists under '<JDK_PATH>\jdk-11.0.12.7-hotspot'
```

#### SetUp BrowserStack
```
- Create account
- Find username, access key
- Upload Android (.apk) and IOS (.ipa) files used in project
- Note down app id for both
- Select device for both android and ios
- Update all details in .env file
```

#### .env file data update
<i>Note: create .env file in root project folder, update required details</i>
```
RUN_MODE=parallel  # Add this only when you want to run test in both devices

EMULATOR_DEVICE1_ID=Pixel_3
EMULATOR_DEVICE1_NAME=Pixel 3
EMULATOR_DEVICE1_VERSION=11

EMULATOR_DEVICE2_ID=Nexus 6
EMULATOR_DEVICE2_NAME=Nexus_6
EMULATOR_DEVICE2_VERSION=10

BROWSERSTACK_USERNAME=
BROWSERSTACK_ACCESS_KEY=

BROWSERSTACK_ANDROID_APP_ID=
BROWSERSTACK_ANDROID_DEVICE=
BROWSERSTACK_ANDROID_VERSION=

BROWSERSTACK_IOS_APP_ID=
BROWSERSTACK_IOS_DEVICE=
BROWSERSTACK_IOS_VERSION=
```

### Run Test:
```
npm test
npm run test-parallel
```

### Generate Report:
```
npm run report
```

### Sample Report
![report](https://user-images.githubusercontent.com/65847528/153757781-c83b8aa9-52f3-4475-b4a0-4c0c3ae8cb55.png)