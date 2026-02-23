import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/homeScreen";
import ExploreScreen from "../screens/exploreScreen";
import ImpactScreen from "../screens/impactScreen";
import ProfileScreen from "../screens/profileScreen";
import DonateScreen from "../screens/donateScreen";

import Entypo from "@expo/vector-icons/Entypo";
import Fontisto from "@expo/vector-icons/Fontisto";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#0f7c4f",
        tabBarInactiveTintColor: "#9ca3af",
        tabBarStyle: {
          height: 70,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={22} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Project"
        component={ExploreScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Fontisto name="compass" size={20} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Our Impact"
        component={ImpactScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="bar-chart" size={22} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="user" size={22} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Donate"
        component={DonateScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="heart" size={22} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
