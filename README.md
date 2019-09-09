# Challenge Hostel List App

## Acceptance Criteria

Display a scrollable list of properties retrieved from our mobile API. Each item should at least show the name of the property, some indication if the property is featured, the property rating formatted as 1 to 10 values with one decimal (8.7) and the property lowest price per night. All prices must be shown in EUR.

Please deliver the code as a zipped project so that it can be built locally or host the project in a public GitHub/Bitbucket repo.

The API is returning all prices in Venezuelan Bolivar. 1 EUR is found by dividing the VEF value by 7.55

### Details

Retrieve the data via GET https://gist.githubusercontent.com/ruimendesM/bf8d095f2e92da94938810b8a8187c21/raw/70b112f88e803bf0f101f2c823a186f3d076d9e6/properties.json

Much of the information can be discarded for the purpose of this challenge. The information you’ll be most interested in is as follows:

“location” -> “city” – Contains information about the city and country.
“properties” -> An array of properties inside the city.
"lowestPricePerNight" -> shows the lowest price per night for the property.
“overview” -> small description
“overallRating”->”overall” -> the property rating from 1 to 100.

### Bonus

There is a bonus for generating network stats, this is accomplished by issuing a GET request to:

https://gist.githubusercontent.com/ruimendesM/cb9313c4d4b3434975a3d7a6700d1787/raw/02d17a4c542ac99fe559df360cbfe9ba24dbe6be/stats

You should use two parameters: action and duration as follows:

action=load – any network request,
duration is the time in ms for the complete request.

Example:

https://gist.githubusercontent.com/ruimendesM/cb9313c4d4b3434975a3d7a6700d1787/raw/02d17a4c542ac99fe559df360cbfe9ba24dbe6be/stats?action=load-details&duration=100

## Requirements

Node
Yarn / NPM
React-Native and React-Native cli
Android SDK or XCode

After installing the React-Native cli, having your ANDROID_HOME variable pointing to your android sdk folder
and having one android device on your USB with debug USB mode on (developers tools), use this comand to run on it:

```
$ react-native run-android
```


## Tests

### Jest

Runs every automated tests using Jest

```
$ yarn test
```

### APK

The apk can be found easily in the apk/ folder.
