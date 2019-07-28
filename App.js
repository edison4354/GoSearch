import {createStackNavigator, createAppContainer} from 'react-navigation';
import MapGo from './src/MapGo'
import Welcome from './src/Welcome'
import Login from './src/Login'
import Signup from './src/Signup'
import Search from './src/Search'
import Test from './src/Test'

const MainNavigator = createStackNavigator({
  Welcome: {screen: Welcome},
  Login: {screen: Login},
  Search: {screen: Search},
  MapGo: {screen: MapGo},
  Signup: {screen: Signup},
  Test: {screen: Test},
});

const App = createAppContainer(MainNavigator);

export default App;