<h2 align="center"> Mobile Test Automation Framework | WebdriverIO | Appium </h2>


### Requirements:
[![NodeJs](https://img.shields.io/badge/-NodeJS-%23339933?logo=npm)](https://nodejs.org/en/download/)
[![Appium-Inspector](https://img.shields.io/badge/-Appium%20Inspector-662d91?logo=appium&logoColor=black)](https://github.com/appium/appium-inspector/releases)
[![AppiumDriver](https://img.shields.io/badge/-Appium%20Driver-662d91?logo=Appium&logoColor=white)](https://appiumpro.com/editions/122-installing-appium-20-and-the-driver-and-plugins-cli)
[![AndroidStudio](https://img.shields.io/badge/-Android%20Studio-3DDC84?logo=android-studio&logoColor=white)](https://developer.android.com/studio)
[![Java](https://img.shields.io/badge/-JDK-%23007396?logo=java&logoColor=black&)](https://www.oracle.com/java/technologies/downloads/)
[![VSCode](https://img.shields.io/badge/-Visual%20Studio%20Code-%233178C6?logo=visual-studio-code)](https://code.visualstudio.com/download)

### Getting Started:

#### Installing Appium on a local machine
> There are several documents and instructions on the internet to install Appium on your local machine.
This is just one of the many ;-)

To setup the local test environment the following needs to be installed:
- [appium](https://github.com/appium/appium) with `npm install appium@next -g`
- [appium-doctor](https://github.com/appium/appium-doctor) with `npm install appium-doctor -g`
- [appium-desktop](https://github.com/appium/appium-desktop) This one needs to be downloaded from [here](https://github.com/appium/appium-desktop/releases) and pick the latest stable releases

#### Setup Android SDK path environment variable
```
- ANDROID_HOME = <path to Sdk folder>
- %ANDROID_HOME%\tools [path variable]
- %ANDROID_HOME%\tools\bin  [path variable]
- %ANDROID_HOME%\platform-tools  [path variable]
```

#### Setup/Create virtual device on Android studio:
```
1] Open Android Studio
2] Click on More Actions 
   --> AVD Manager 
   --> Create Virtual Device 
   --> Select the device and OS version (from below device details) 
   --> Finish
3] Once Virtual device is created, click on Launch this AVD in the emulator.
4] Command to view the list of devices attached `adb devices`
```

```
Device 1: Pixel 3 - version 11
Device 2: Nexus 6 - version 10 [ if you want to run tests in parallel ] 
```

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

#### Verify appium drivers:
```
appium driver list

Sample output log of driver
-----------------------------
✔ Listing available drivers
- uiautomator2@1.75.0 [installed (NPM)]
- xcuitest [not installed]
```

> If drivers are not installed then run below commnad as required:
```
appium driver install uiautomator2  [ android driver ]
appium driver install xcuitest      [ ios driver ]
```

#### Verify all pre-requisite for android:
> appium-doctor is used to diagnose and fix common Node, iOS and Android configuration issues before starting Appium. You only run it once to check your local machine. See an example output below.
```
appium-doctor

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

#### SetUp BrowserStack
```
- Create account
- Find username, access key
- Upload Android (.apk) and IOS (.ipa) files used in project
- Note down app id for both
- Select device for both android and ios
- Update all details in .env file
```

### Run Test:
```
npm test
```

### Generate Report:
```
npm run report
```

### Sample Report
![report](https://user-images.githubusercontent.com/65847528/153757781-c83b8aa9-52f3-4475-b4a0-4c0c3ae8cb55.png)