import {createStackNavigator, createAppContainer} from 'react-navigation';
import Map from './Map'
import Welcome from './Welcome'
import Login from './Login'

const MainNavigator = createStackNavigator({
  Welcome: {screen: Welcome},
  Map: {screen: Map},
  Login: {screen: Login},
});

const App = createAppContainer(MainNavigator);

export default App;