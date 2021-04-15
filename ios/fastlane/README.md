fastlane documentation
================
# Installation

Make sure you have the latest version of the Xcode command line tools installed:

```
xcode-select --install
```

Install _fastlane_ using
```
[sudo] gem install fastlane -NV
```
or alternatively using `brew install fastlane`

# Available Actions
## iOS
### ios betalocal
```
fastlane ios betalocal
```
Push a new beta build to TestFlight
### ios beta
```
fastlane ios beta
```
Create Signed IPA Build for AppStore
### ios release
```
fastlane ios release
```
Upload to testfligh for testing
### ios firebase
```
fastlane ios firebase
```
Create Signed IPA Build for Firebase
### ios update_appicon
```
fastlane ios update_appicon
```
Update appicon
### ios splash_screen
```
fastlane ios splash_screen
```
Update splash

----

This README.md is auto-generated and will be re-generated every time [fastlane](https://fastlane.tools) is run.
More information about fastlane can be found on [fastlane.tools](https://fastlane.tools).
The documentation of fastlane can be found on [docs.fastlane.tools](https://docs.fastlane.tools).
