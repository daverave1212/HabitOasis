# HabitOasis
Project for friends


## 1. Pre-setup
1. Install Java
2. Install Android Studio
	- From Android Studio, go to SDK Manager and install the 31.x.x version
3. Install Gradle (they have a guide on gradle.org/install)
4. Install android command line tools:
	- Go to the android sdk website and click that you want to download the CLI only
	- Put it in AppData/Local/Android/cmdline-tools
	- Rename the cmdline-tools folder to 'tools' so that the full path will be `...AppData\Local\Android\cmdline-tools\tools\...`
	- Rename bin to 'latest'
	- (don't ommit the next step with env variables, it's needed for this too)
5. Setup your environment variables:
	a. Search for 'environment variable' in search
	b. Add a new environment variable JAVA_HOME if it doesn't exist, which links to "`C:\Program Files\Java\jdk<version>`"
	c. Add a new entry to the PATH variable as `%JAVA_HOME%\bin`
	d. Add a new environment variable ANROID_HOME as `C:\Users\david\AppData\Local\Android\Sdk` (obviously an example path)
	e. Add `C:\Users\david\AppData\Local\Android\cmdline-tools\tools\latest` to PATH
	f. Add `C:\Users\david\AppData\Local\Android\Sdk\tools`, `C:\Users\david\AppData\Local\Android\Sdk\platform-tools` and `C:\Users\david\AppData\Local\Android\Sdk\build-tools` to PATH
6. Update sdkmanager platform tools:
	- `sdkmanager "platform-tools" "platforms;android-26"`
	- `sdkmanager "build-tools;32.0.0"`
	- Make sure it's the EXACT version cordova wants; otherwise it will cry
		- You can make suer of that by going into Android Studio > File >Settings > SDK > check show details down on the right > sdk something idk you can figure it out; install exactly the version it wants

## 2. Setup

7. Install cordova: `npm install -g cordova`
8. Create a new cordova project: `cordova create my-app com.example.myapp MyAppName`
9. `cordova platform add android`
10.`cordova build android` 
10. `cordova emulate android` 
