import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './screens/HomeScreen';
import GalleryScreen from './screens/GalleryScreen';
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const getIcon = ({ focused, color, size }, route) => {
  let iconName;

  if (route.name === 'Home') {
    iconName = focused
      ? 'home'
      : 'home-outline';
  } else if (route.name === 'Gallery') {
    iconName = focused ? 'images' : 'images-outline';
  }

  return <Ionicons name={iconName} size={size} color={color} />;
}

const screenOptions = ({ route }) => ({
  tabBarIcon: (props) => getIcon(props, route),
  tabBarActiveTintColor: 'red',
  tabBarInactiveTintColor: 'gray',
})

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Gallery" component={GalleryScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;


