# DEPRESSION DETECTION MOBILE APPLICATION FOR HIGH SCHOOL STUDENTS

# Flow
1. Install required programs or dependencies
 1.1 Make sure **android** folder is inside **frontend** folder https://drive.google.com/file/d/10p4Wgn5uKS3gl5iFLmqcvLNJ-dAWV7ID/view?usp=sharing
2. Turn on emulator in android studio ( wait until it finish loading and you can see the phone screen )
3. Run ./init-backend.sh
4. Run ./init-frontend.sh

# Setup

## Start
- Open JDK
 - https://builds.openlogic.com/downloadJDK/openlogic-openjdk/11.0.17+8/openlogic-openjdk-11.0.17+8-windows-x64.msi
- Variables
 - ANDROID_HOME e.g. C:\Users\antho\AppData\Local\Android\Sdk\
 - JAVA_HOME e.g. C:\Program Files\OpenJDK\jdk-11.0.17.8-hotspot\
- Android Libraries
 - Android SDK Platform 31
 - Google APIs Intel x86 Atom System Image
- Android Emulator
 - Use Google API 31
- Frontend/Node_Modules/expo-modules-core/android/build.gradle
 - remove entire block with ```externalNativeBuild REACT_NATIVE_TARGET_VERSION >= 71```
- android/app/build.gradle
 - add this line of code at the end ```apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"```
- usb phone
 - disable dark mode (in Display and Brightness)
 - connect phone to pc with a connector
 - enable developer mode (tap version in about phone)
 - enable usb debug mode (in additional settings)
 - switch usb configuration to "usb tethering"
 - to restart adb session, 
  - disable usb tethering and enable back again
  - run adb reverse
  - run android command again
 - enable pc and phone network
 - run ```adb usb```
 - run ```adb devices```


## Installlation
- Android Studio https://redirector.gvt1.com/edgedl/android/studio/install/2022.3.1.20/android-studio-2022.3.1.20-windows.exe
- postgres https://sbp.enterprisedb.com/getfile.jsp?fileid=1258698
 - postgres password: password
- nvm https://github.com/coreybutler/nvm-windows/releases/download/1.1.11/nvm-setup.exe

## After Installation
- replace init-frontend.sh emulator/device name with the configured one
- mailtrap https://mailtrap.io/
 - betitaapp@gmail.com
 - _password@123

## init scripts
- chmod u+x init-backend.sh & ./init-backend.sh
- chmod u+x init-frontend.sh & ./init-frontend.sh

## User accounts
- admin
 admin@test.com
 password
- student
 student1@test.com
 password
 student2@test.com
 password

### RECORDINGS
1. Android Studio installation https://drive.google.com/file/d/1BqkK6arfRyPy8Jx_RmvH7bi8sT5k5Td2/view?usp=sharing
2. Postgres installation https://drive.google.com/file/d/1wxxmUh0LHTw3Rhz5xfHdn9g8aAicvn9M/view?usp=sharing
3. NVM installation https://drive.google.com/file/d/1ddKpV6TKwVrUOCL3ubxKF2eXmDfsB3Xi/view?usp=sharing
4. Mailtrap login https://drive.google.com/file/d/1nApHWzAU2CKwdNQ4A1UQ9AO956AR1Hy2/view?usp=sharing
5. Run application https://drive.google.com/file/d/1aRioVkQAsorRwCCvg3PN2yMTvoFGYvRr/view?usp=sharing
