import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './tabs/HomeScreen';
// import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from './tabs/DetailsScreen';
import RateUs from './tabs/RateUs';
import ContactUsScreen from '../screens/ContactUsScreen';
import TumorDetectionScreen from '../screens/TumorDetectionScreen';
// import Vinayak from './screens/Vinayak';

//Screen names
const homeName = "Home";
const reactAtUs = "ContactUs";
const settingsName = "RateUs";
const tumorsName = 'TumorDetection';

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === reactAtUs) {
              iconName = focused ? 'list' : 'list-outline';

            } else if (rn === settingsName) {
              iconName = focused ? 'star' : 'star-outline';
            } else if(rn === tumorsName) {
              iconName = focused ? "bug":"bug";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "grey",
          tabBarLabelStyle: {
            "paddingBottom": 10,
            "fontSize": 10
          },
          tabBarStyle: [
            {
              "display": "flex"
            },
            null
          ]
        })}>

        <Tab.Screen name={homeName} component={HomeScreen} options={{headerShown: false}} />
        <Tab.Screen name={reactAtUs} component={ContactUsScreen} options={{headerShown: false}} />
        <Tab.Screen name={tumorsName} component={TumorDetectionScreen} options={{headerShown: false}}/>
        <Tab.Screen name={settingsName} component={RateUs} options={{headerShown: false}}/>
        
        

      </Tab.Navigator>
  );
}

export default MainContainer;