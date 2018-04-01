import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';
import DetailScreen from '../screens/DetailScreen';
import ModalScreen from '../screens/ModalScreen';
import SharedComponentsScreen from '../screens/SharedComponentsScreen';
import NavigationScreen from '../screens/NavigationScreen';
import HelloScreen from '../screens/HelloScreen';

const routes = {
  Home: {
    screen: HomeScreen,
    path: "/"
  }, 
  Hello: {
    screen: HelloScreen,
    path: "/hello"
  }, 
  Modal: {
    screen: ModalScreen,
    path: "/modal"
  },
  Shared: {
    screen: SharedComponentsScreen,
    path: "/shared-component"
  },
  Navigation: {
    screen: NavigationScreen,
    path: "/navigation"
  },
  About: {
    screen: AboutScreen,
    path: "/about"
  },
  Detail: {
    screen: DetailScreen,
    path: "/detail"
  }
};

export const initialRouteName = {
  initialRouteName: 'Home',
}
export default routes;