# React Native + Web Boilerplate
Ultimate React Native + Web Boilerplate. This boilerplate is created on top of React Native and React Native Web. The idea is create project with seamless development experience and shareable codebase for both react native and react native web.
## Key Feature
1. Clear project structure & dependencies using [lerna](https://github.com/lerna/lerna).
2. React Native project support symlink and webpack ecosystem using [haul](https://github.com/callstack/haul).
3. Built-in Navigation ([react navigation](https://reactnavigation.org/) and [react-router](https://github.com/ReactTraining/react-router)). 
4. Web history API support.
5. Same navigation API using [react navigation](https://reactnavigation.org/) API style.
6. Wrap some react native component that currently not implemented yet on react-native web (Modal)

## ⚡️ Get Started Immediately ⚡️ 
#### Clone this repository and install all dependencies
``` 
  git clone git@github.com:drgx/react-native-plus-web.git
  cd react-native-plus-web
  yarn 

  # bootstrap all package dependencies 
  yarn bootstrap
```
### 🌟Preview 🌟
![preview](https://user-images.githubusercontent.com/5230095/38617965-8a827142-3dc2-11e8-9791-05dbb66006a9.gif)

### Running Apps 
You need to start the server by following this commend: 
```
cd packages/apps/
yarn haul 
#choose to run server between Ios, Android or Both Ios and Android
```

#### For running android
Open your [android emulator](https://medium.com/@deepak.gulati/running-react-native-app-on-the-android-emulator-11bf309443eb) or plug your android devices

Simply run `react-native run-android`.

Since react-native v0.52+ to be able to start using `haul` you need to disable delta (cmd+m -> dev setting, uncheck use js deltas) and debug JS remotely on our emulator or devices. See [haul limitation & issue](https://github.com/callstack/haul#limitations). This issue is likely fix by haul team soon.


#### For running ios 
Open your [ios simulator](https://facebook.github.io/react-native/docs/running-on-simulator-ios.html). Simply run `react-native run-ios` on your terminal.

####  Running Web 
```
cd packages/web/
yarn watch:web 
# open http://localhost:3000 on your browser
```

## Folder structure
```
react-native-plus-web
├── README.md
├── lerna.json
├── package.json
└── packages
    ├── apps      <<<< React Native Project
    │   ├── android
    │   ├── app.json
    │   ├── index.js
    │   ├── ios
    │   ├── package.json
    │   ├── webpack.haul.js
    │   └── yarn.lock
    ├── shared    <<<< Shared code between apps and web
    │   ├── components
    │   │   ├── Modal 
    │   │   └── Navigator
    │   ├── constants
    │   │   └── routes.js 
    │   ├── package-lock.json
    │   ├── package.json
    │   └── yarn.lock
    └── web       <<<< React Native web Project
        ├── font.js
        ├── index.web.js
        ├── loaderConfiguration.js
        ├── package.json
        ├── template.html
        ├── webpack.common.js
        ├── webpack.dev.js
        ├── webpack.prod.js
        └── yarn.lock
```


## Routes & Navigation
For editing or adding new routes simply edit [`routes.js`](https://github.com/drgx/react-native-plus-web/blob/master/packages/shared/constants/routes.js)

And for moving between screen simply use `this.props.navigation` to navigate based on routes definition on [`routes.js`](https://github.com/drgx/react-native-plus-web/blob/master/packages/shared/constants/routes.js)

```
# Example to navigate to detail screen
 <Button
  title="Navigate to Detail Screen"
  onPress={() => {
    this.props.navigation.navigate("Detail");
  }}
/>

# Example to back
<Button
  title="Back"
  onPress={() => {
    this.props.navigation.goBack();
  }}
/>
```
## Contributing
We'd ❤️ to have your helping hand on react-native-plus-web! Feel free to PR's, add issues or give feedback! Happy Hacking!! 😎 
