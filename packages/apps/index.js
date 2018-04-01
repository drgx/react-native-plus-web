import { AppRegistry } from 'react-native';
import Shared from 'shared/components/SharedComponent'
import PlatformSpecific from 'shared/components/PlatformSpecific/PlatformComponent';
import AppsNavigator from 'shared/components/Navigator/AppsNavigator';

AppRegistry.registerComponent('apps', () => AppsNavigator);
