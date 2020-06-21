## 1. Add your image to android/app/src/main/res/mipmap-\*

    Add the same image to all mipmap folders and make sure all of them are of same name.

    ```
    Like
        mipmap/hdpi/icon.png
        mipmap/mdpi/icon.png
        mipmap/xhdpi/icon.png
        etc.
    ```

## 2. Create folder `drawable` inside android/app/src/main/res if it doesn't exists

## 3. Create `background_splash.xml` in android/app/src/main/res/drawable

    Add this to `background_splash.xml`
    ```
    <?xml version="1.0" encoding="utf-8"?>
    <layer-list xmlns:android="http://schemas.android.com/apk/res/android">
    <!-- We will add this color later -->
    <item
        android:drawable="@color/blue"/>

    <!-- icon is the name of your image (without the extension) -->
    <item
        android:width="200dp"
        android:height="200dp"
        android:drawable="@mipmap/icon"
        android:gravity="center" />

    </layer-list>
    ```

    Complete `background-splash.xml` looks like
    ```
    <?xml version="1.0" encoding="utf-8"?>
    <layer-list xmlns:android="http://schemas.android.com/apk/res/android">

    <item
        android:drawable="@color/blue"/>

    <item
        android:width="460dp"
        android:height="252dp"
        android:drawable="@mipmap/logo"
        android:gravity="center" />

    </layer-list>
    ```

## 4. Create `colors.xml` in android/app/src/main/res/values

    Define the blue color we used in `background_splash.xml`

    ```
    <?xml version="1.0" encoding="utf-8"?>
    <resources>
        <color name="blue">#1b4261</color>
    </resources>
    ```

## 5. Create a SplashTheme in android/app/src/main/res/values/styles.xml

    ```
    <style name="SplashTheme" parent="Theme.AppCompat.Light.NoActionBar">
        <item name="android:windowBackground">@drawable/background_splash</item>
        <!-- Updates the status bar to our blue color -->
        <item name="android:statusBarColor">@color/blue</item>
    </style>
    ```
    Update the statusBar of AppTheme as well, inside android/app/src/main/res/values/styles.xml

    ```
    <style name="AppTheme" parent="Theme.AppCompat.Light.NoActionBar">
        <!-- Customize your theme here. -->
        <item name="android:statusBarColor">@color/blue</item>
    </style>
    ```

    Complete styles.xml looks like
    ```
    <resources>

    <!-- Base application theme. -->
    <style name="AppTheme" parent="Theme.AppCompat.Light.NoActionBar">
        <!-- Customize your theme here. -->
        <item name="android:statusBarColor">@color/blue</item>
        <item name="android:textColor">#000000</item>
    </style>
    <style name="SplashTheme" parent="Theme.AppCompat.Light.NoActionBar">
        <item name="android:windowBackground">@drawable/background_splash</item>
        <item name="android:statusBarColor">@color/blue</item>
    </style>
    </resources>
    ```

## 6. Tell app to use the SplashTheme in android/app/src/main/AndroidManifest.xml

    Add this activity inside `application` tag, **before** the MainActivity activity tag
    ```
    <activity
        android:name=".SplashActivity"
        android:theme="@style/SplashTheme"
        android:label="@string/app_name">
        <intent-filter>
            <action android:name="android.intent.action.MAIN" />
            <category android:name="android.intent.category.LAUNCHER" />
        </intent-filter>
    </activity>
    ```

    Also make sure the `intent-filter` tag is present only in the SplashActivity tag
    we added above. If it is present in MainActivity, remove it.
    > Note that both intent-filter tags are the same

    Now modify MainActivity to add `android:exported="true"`

    MainActivity now looks like
    ```
    <activity
        android:name=".MainActivity"
        android:label="@string/app_name"
        android:configChanges="keyboard|keyboardHidden|orientation|screenSize|uiMode"
        android:launchMode="singleTask"
        android:windowSoftInputMode="adjustPan|adjustResize"
        android:exported="true">
    </activity>
    ```

    Complete AndroidManifest.xml looks like
    ```
    <manifest xmlns:android="http://schemas.android.com/apk/res/android"
        package="com.zaaminapp">

    <uses-permission android:name="android.permission.INTERNET" />

    <application
      android:name=".MainApplication"
      android:label="@string/app_name"
      android:icon="@mipmap/ic_launcher"
      android:roundIcon="@mipmap/ic_launcher_round"
      android:allowBackup="false"
      android:theme="@style/AppTheme">
      <activity
        android:name=".SplashActivity"
        android:theme="@style/SplashTheme"
        android:label="@string/app_name">
        <intent-filter>
            <action android:name="android.intent.action.MAIN" />
            <category android:name="android.intent.category.LAUNCHER" />
        </intent-filter>
      </activity>
      <activity
        android:name=".MainActivity"
        android:label="@string/app_name"
        android:configChanges="keyboard|keyboardHidden|orientation|screenSize|uiMode"
        android:launchMode="singleTask"
        android:windowSoftInputMode="adjustPan|adjustResize"
        android:exported="true">
      </activity>
      <activity android:name="com.facebook.react.devsupport.DevSettingsActivity" />
    </application>

    </manifest>
    ```

## 7. Go inside your package android/app/src/main/java/com/{your-package}

    You will find `MainActivity.java` in this folder, here create
    a new file `SplashActivity.java` and add this

    ```
    package com.{your-package}; // Your package name, same as in MainActivity.java

    import android.content.Intent;
    import android.os.Bundle;

    // NOTE: ONLY ONE OF THE BELOW IMPORT LINES SHOULD BE USED

    // Use this line if you are using android.support.v7
    // If you have no idea about this, check out `Find if I'm using AndroidX` section below
    import android.support.v7.app.AppCompatActivity;

    // Use this line if you are using androidx

    import androidx.appcompat.app.AppCompatActivity;

    public class SplashActivity extends AppCompatActivity {
        @Override
        protected void onCreate(Bundle savedInstanceState) {
            super.onCreate(savedInstanceState);

            Intent intent = new Intent(this, MainActivity.class);
            startActivity(intent);
            finish();
        }
    }
    ```

## 7.1 If you are using AndroidX

    Go to android/app/build.gradle

    Add

    ```
    implementation 'androidx.appcompat:appcompat:1.0.0'
    ```

    in dependencies, like

    ```
    dependencies {
        implementation "com.facebook.react:react-native:+"  // From node_modules

        implementation "androidx.swiperefreshlayout:swiperefreshlayout:1.0.0"
        ...
        implementation 'androidx.appcompat:appcompat:1.0.0'
    }
    ```

## 7.2 If you are using androidv7

    Go to android/app/build.gradle

    Add

    ```
    compile 'com.android.support:appcompat-v7:28.0.0
    ```

    in dependencies, like

    ```
    dependencies {
        compile "com.facebook.react:react-native:+"  // From node_modules

        compile "androidx.swiperefreshlayout:swiperefreshlayout:1.0.0"
        ...
        compile 'com.android.support:appcompat-v7:28.0.0
    }
    ```

## 8. Quit metro bundler and builds if they are running

    Restart build, let the metro bundler finish when it opens your app, after you see
    your first screen (not the splash screen), close and clear the app. Reopen it.

    You should now see your splash screen, and then a white screen.
    If you want to fix this white screen, keep reading

## 9. Install `react-native-splash-screen@3.2.0`

## 10. Display a second same splash screen instead of the white screen

    Inside android/app/src/main/java/com/{your-package}/MainActivity.java

    Add these imports
    ```
    import org.devio.rn.splashscreen.SplashScreen;
    import android.os.Bundle;
    ```

    And add this method

    ```
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);
        super.onCreate(savedInstanceState);
    }
    ```

## 11. Hide splash screen when the app loads

    Inside App.js (your apps entry point), hide the splash screen

    Functional Component Example

    ```
    import React, { useEffect } from 'react';
    import SplashScreen from 'react-native-splash-screen';

    const App = () => {
        useEffect(() => {
            SplashScreen.hide();
        }, []);

        ...
    };
    export default App;
    ```

    Class Component Example

    ```
    import React, { Component } from 'react';
    import SplashScreen from 'react-native-splash-screen';

    class App extends Component {
        componentDidMount() {
            SplashScreen.hide()
        }

        ...
    }
    export default App;
    ```

## 12. Create launch_screen.xml inside android/app/src/main/res/layout

    Note: The file name launch_screen.xml matters, don't change it.
    Note: Create the layout folder if it doesn't already exist

    Add this to `launch_screen.xml`

    ```
    <?xml version="1.0" encoding="utf-8"?>
    <LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
        android:orientation="vertical"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:background="@color/blue"
        android:gravity="center">

    <!-- Width & Height must be same as defined in android/app/src/main/res/drawable/background_splash.xml -->
    <!-- Update your image name in android:src -->
        <ImageView
            android:layout_width="200dp"
            android:layout_height="200dp"
            android:layout_marginTop="24dp"
            android:src="@mipmap/icon"
        />
    </LinearLayout>
    ```

## 13. Add color for react-native-splash-screen

    Inside `android/app/src/main/res/values/colors.xml`
    Add
    ```
    <color name="primary_dark">#4F6D7A</color>
    ```

## 14. Update the status bar color for the second splash screen

    Inside `android/app/src/main/res/values/colors.xml`
    Add
    ```
    <color name="status_bar_color">#1b4261</color>
    ```

## 15. Create style for second splash screen

    Inside `android/app/src/main/res/values/styles.xml`
    Add
    ```
    <style name="SplashScreenTheme" parent="SplashScreen_SplashTheme">
        <item name="colorPrimaryDark">@color/status_bar_color</item>
    </style>
    ```

## 16. Update Activity to use splash styles

    Inside `android/app/src/main/java/com/{your-package}/MainActivity.java`

    Update this line
    ```
    SplashScreen.show(this);
    ```
    to this
    ```
    SplashScreen.show(this, R.style.SplashScreenTheme);
    ```

## Find if I'm using AndroidX

    Go to `android/gradle.properties`

    And check if you have these lines

    ```
    android.useAndroidX=true
    android.enableJetifier=true
    ```

    If you have the above lines, you are using AndroidX
    If not, you are using v7 (deprecated)
