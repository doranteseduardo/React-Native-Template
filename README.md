# Startup - RN App Template
This is a preconfigured react native application, already integrated with the following libraries:

 - @react-native-community/cameraroll
 - @react-native-community/geolocation
 - @react-native-firebase/app
 - @react-native-firebase/auth
 - @react-native-firebase/firestore
 - @react-native-firebase/storage
 - react-native-camera
 - react-native-fast-image
 - react-native-navigation
 - react-native-permissions
 - react-native-push-notification
 - react-native-video

## Prerequisites
After cloning you must execute the following command:

    npm install

In order to use Firebase you must login into the [firebase panel](http://firebase.google.com/), create/open a project, add an android application and download the **google-services.json** file.

Then, copy the file into the **android/app/** folder.

## How to run

After cloning this repository you have to do nothing but run:

    npx react-native run-android

## How to rename the app and package name

To change the package name you must rename the bold folder in the following path:
*/android/app/src/main/java/com/**startup*** 

e.g
*/android/app/src/main/java/com/myapp*
*/android/app/src/main/java/com/mycompany/myapp* 

Open /android/app/src/main/res/values/**strings.xml** and replace the *app_name* value with your desided app name.

Finally, you can safely replace all **com.startup** values (11 matches) to the one you choose when you renamed the paths.

e.g
*com.myapp*
*com.mycompany.myapp*

Finally, execute the following command:

    cd android; ./gradlew clean; cd ..; npx react-native run-android

## How to build a release package
You can follow [this well-explained guide](https://www.instamobile.io/android-development/generate-react-native-release-build-android/).