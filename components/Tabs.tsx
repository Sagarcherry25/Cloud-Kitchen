import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import { Feather } from "@expo/vector-icons";
import Track from "../screens/Track";
import Cart from "../screens/Cart";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "lightgrey",
        tabBarInactiveTintColor: "#fff",
        tabBarActiveBackgroundColor: "gray",
        tabBarInactiveBackgroundColor: "#0A8791",
        tabBarLabelPosition: "below-icon",
        headerShadowVisible: false,
      }}
    >
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather name={"home"} size={20} color={"black"} />
          ),
          tabBarLabel: "Cloud Kitchen",
          headerShown: false,
        }}
      >
        {() => <Home />}
      </Tab.Screen>
      <Tab.Screen
        name="Track"
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather name={"map-pin"} size={20} color={"black"} />
          ),
          tabBarLabel: "Track",
        }}
      >
        {() => <Track />}
      </Tab.Screen>
      <Tab.Screen
        name="Cart"
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather name={"shopping-cart"} size={20} color={"black"} />
          ),
          tabBarLabel: "Cart",
        }}
      >
        {() => <Cart />}
      </Tab.Screen>
      <Tab.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather name={"settings"} size={20} color={"black"} />
          ),
          tabBarLabel: "Profile",
        }}
      >
        {() => <Profile />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default Tabs;
