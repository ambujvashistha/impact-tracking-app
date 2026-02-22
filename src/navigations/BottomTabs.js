import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/homeScreen";
import ExploreScreen from "../screens/exploreScreen";
import ImpactScreen from "../screens/impactScreen";
import ProfileScreen from "../screens/profileScreen";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import Fontisto from "@expo/vector-icons/Fontisto";
import Feather from "@expo/vector-icons/Feather";
const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarIcon: ({ focused }) => {return focused ? <Entypo name="home" size={24} color="#007c4f" /> :  <AntDesign name="home" size={24} color="#888" /> } }} />
      <Tab.Screen name="Explore" component={ExploreScreen} options={{ tabBarIcon: ({ focused }) => <Fontisto name="compass" size={22} color={focused ? "#007c4f" : "#888"} /> }} />
      <Tab.Screen name="Impact" component={ImpactScreen} options={{tabBarIcon: ({focused}) => <AntDesign name="bar-chart" size={24} color={focused ? "#007c4f" : "#888"} />}} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{tabBarIcon: ({focused}) => <Feather name="user" size={24} color={focused ? "#007c4f" : "#888"} />}} />
    </Tab.Navigator>
  );
}
