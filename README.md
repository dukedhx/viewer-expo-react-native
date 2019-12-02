[![Build Status](https://travis-ci.org/dukedhx/viewer-expo-react-native.svg?branch=master)](https://travis-ci.org/dukedhx/viewer-expo-react-native)
[![Expo](https://img.shields.io/badge/ExpoSDK-v35-blue.svg)](https://expo.io/)
[![React Native](https://img.shields.io/badge/ReactNative-v0.59-green.svg)](https://facebook.github.io/react-native/)
[![License](http://img.shields.io/:license-mit-blue.svg)](http://opensource.org/licenses/MIT)

[![Autodesk Forge](https://img.shields.io/badge/Autodesk-Forge-orange.svg)](http://forge.autodesk.com/)
[![Viewer](https://img.shields.io/badge/Viewer-v7-green.svg)](http://forge.autodesk.com/)
[![Standard](https://img.shields.io/badge/Standard-Style-green.svg)](https://github.com/standard/standard)

## Description

This is a sample project with boilerplate code to build cross platform [Autodesk Forge](https://forge.autodesk.com/) [Viewer](https://forge.autodesk.com/apis-and-services/viewer) apps with Expo SDK - an React Native SDK.

See details in the accompanying blog article here: https://forge.autodesk.com/blog/fast-track-your-react-native-forge-app-expo-sdk

## Prerequisites

- Install [Node.js](https://nodejs.org/en/download/)

- Install [Expo CLI](https://docs.expo.io/versions/latest/workflow/expo-cli/) (Optional)

- Install [Expo Mobile Client](https://expo.io/tools#client) (Optional)

- Install [Android Simulator](https://developer.android.com/studio/run/emulator) / [Xcode for iOS Simulator](https://developer.apple.com/library/archive/documentation/IDEs/Conceptual/iOS_Simulator_Guide/GettingStartedwithiOSSimulator/GettingStartedwithiOSSimulator.html) (Optional)

## Setup and Run

- Clone the project and proceed to its directory in CLI

- Option: load model under `assets` folder with hosted WebView contents and Service Worker

  - Host the contents in `./docs` (HTML and Service Worker) behind a SSL enabled (https URL) address and specify the URL here (optional - can use the ones hosted on Github Pages):
  ```
  \\./App.js
  source={{ uri: 'https://url' + svfUrl }}
  ```
  - Put SVF files (see [here](https://forge.autodesk.com/blog/forge-svf-extractor-c-net) and [here](https://forge.autodesk.com/blog/forge-svf-extractor-nodejs) to translate design files to SVF and download the outputs) under the `assets` folder
  - Add references to the SVF files respectively:
  ```
  \\./components/constants.js
  const modelAssets = {
    'assets/path/to/model/0.svf'': require('./assets/path/to/model/0.svf') //must use relative path without preceding slash
    'assets/path/to/model/0.pf'': require('./assets/path/to/model/0.pf')
    //...
  }
  ```
  - Uncomment and specify the SVF path:
  ```
  \\./App.js
  const svfUrl = 'assets/path/to/.svf' //must use relative path without preceding slash
  ```


- Option: load model from a URL with inline WebView contents

  - Uncomment the WebView props to load the local HTML (`./assets/viewer.html`) as inline string in `./App.js`
  - Uncomment and specify the SVF path:
  ```
  \\./App.js
  const svfUrl = 'http://hostname/path/to/svf'
  ```

- `npm install` //run once to install dependencies

- `npm start` //start the app

- Open the app on your iOS/Android Expo client - see [here](https://docs.expo.io/versions/v35.0.0/guides/testing-on-devices/) for instructions


## Building to Platform Targets

//TODO

## App Provisioning

//TODO

## Running on Clients

![android](https://flint-prodcms-forge.s3.amazonaws.com/prod/s3fs-public/inline-images/Screenshot_20191122-150554.png)

![ios](https://imgur.com/4hpDALc.png)


## License

[MIT](http://opensource.org/licenses/MIT)

## Written By

[Bryan Huang](https://www.linkedin.com/in/bryan-huang-1447b862) - Forge Partner Development https://forge.autodesk.com
