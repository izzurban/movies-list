import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from './scenes/Home/Home.native.js';
import Search from './scenes/Search/Search.native.js';
import Favorites from './scenes/Favorites/Favorites.native.js';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function Routes() {

  const icon = (route, focused) => {
    switch (route.name) {
      case 'Home':
        return(focused ? 'home' : 'home-outline')
        break;
      case 'Search':
        return(focused? 'search' : 'search-outline')
        break;
      case 'Favorites':
        return(focused? 'heart' : 'heart-outline')
      break;
      default:
        return(focused? 'ios-information-circle' : 'ios-information-circle-outline')
        break;
    }
  }

  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        // You can return any component that you like here!
        return <Ionicons name={icon(route, focused)} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'red',
      tabBarInactiveTintColor: 'gray',
      tabBarActiveBackgroundColor: '#fff',
      tabBarInactiveBackgroundColor: '#fff',
      headerShown: false
    })}
  >
      <Tab.Screen name="Home" component={Home} options={{ tabBarLabel: 'Home'}}/>
      <Tab.Screen name="Search" component={Search}/>
      <Tab.Screen name="Favorites" component={Favorites}/>
    </Tab.Navigator>
  )
}