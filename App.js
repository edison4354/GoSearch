import {createStackNavigator, createAppContainer} from 'react-navigation';
import Map from './src/Map'
import Welcome from './src/Welcome'
import Login from './src/Login'
import Signup from './src/Signup'
import Search from './src/Search'

const MainNavigator = createStackNavigator({
  Welcome: {screen: Welcome},
  Map: {screen: Map},
  Login: {screen: Login},
  Signup: {screen: Signup},
  Search: {screen: Search},
});

const App = createAppContainer(MainNavigator);

export default App;