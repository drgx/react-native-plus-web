import React from 'react';
import { AppRegistry } from 'react-native';
import { AppContainer } from 'react-hot-loader';
// import App from 'shared/components/SharedComponent';
// import App from 'shared/components/PlatformSpecific/PlatformComponent';
import App from 'shared/components/navigator/AppsNavigator';

const renderApp = () => (
  <AppContainer>
    <App />
  </AppContainer>
);

AppRegistry.registerComponent('ReactNativePlusWeb', () => renderApp);

if (module.hot) {
  // $FlowFixMe
  module.hot.accept();

  const renderHotApp = () => (
    <AppContainer>
      <App />
    </AppContainer>
  );

  // App registration and rendering
  AppRegistry.registerComponent('ReactNativePlusWeb', () => renderHotApp);
}

AppRegistry.runApplication('ReactNativePlusWeb', {
  rootTag: document.getElementById('root'),
});