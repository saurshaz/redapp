######################################################
# HRX 												 #
######################################################


-- change project name
-- move to components folder
-- connect to backend (seperate Node.JS server) 
-- connect to backend (seperate Python server) 

######################################################
# UX Features										 #
######################################################
-- Drawer Nav Panel
-- Tinder like swipe
-- Header Panel (ideally scrolling collapsed)
-- Notification drop down from top
-- Routing
-- Camera integration and pick image from gallery
-- Push Notification(GCM and APN settings)
-- Access to Contacts
-- Access to GPS and Map view
-- Spinner
-- Select 2 (addable tags and dropdown to select those)
-- Date Picker
-- Social Login (FB and LinkedIn)
-- Integrate Twitter,Github,Tumblr,Instagram,BitBucket,Wordpress,Any Link, CV
-- Upload File
-- Whatsapp messaging
-- Social share widget (for Jobs/Resume/App)
-- Material Design 


-- OTP Twilio integration
-- Fetch sets of data cards as needed(ala infinite scroll)
-- Ability to send/read SMS
-- Read profile from LinkedIN & FB
-- upload image to server
-- integration with Crunchbase, Angellist etc
-- integrate with 3rd party pre-verification
-- Integrate with smarterer to 
    -- create new tests
    -- take existing tests from with the app
    -- show scores as part of profile 


-- Dashboard App Web
-- Dashboard App Web(with same functionality + more)


######################################################
# Credits											 #
######################################################

Kudos to 
- React & React-Native team
- [chentsulin] (https://github.com/chentsulin) (for this superbly simple example)
above all to 
- [gaearon](https://github.com/gaearon) and [Redux] (https://github.com/gaearon/redux) contributors
-Components & Abstraction

- react-native 0.11
- redux 3
- react-redux 
- redux-thunk

![](demo.png)

######################################################
# How to run this Porject           				 #
######################################################

### Changes
- Added ES6 support  and more REdux code to the simpler example post understanding.


#### Setup iOS and Android env

see

- [iOS setup](https://facebook.github.io/react-native/docs/getting-started.html#ios-setup) 
- [Android setup](https://facebook.github.io/react-native/docs/android-setup.html#content)



#### Install npm dependecies

```sh
npm i
```

### Runs on all major environments

[] (https://gyazo.com/15b3025fc3b2574ec814de2718a5f9d0)

#### run iOS

Open `ios/ReduxCounterUniversal.xcodeproj` and hit run in Xcode.

#### run Android

```sh
emulator -avd [your_emulator_name] -gpu on &
react-native run-android
```

## License
MIT © [SaurShaz](https://github.com/saurshaz)
