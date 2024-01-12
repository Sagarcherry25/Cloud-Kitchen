import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import FoodItems from "./FoodItems";
import { Dimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createMaterialTopTabNavigator();

const TabView = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        swipeEnabled: false,
      }}
      sceneContainerStyle={{ backgroundColor: "transparent" }}
    >
      <Tab.Screen name="Frequently Order" component={FoodItems} />
      <Tab.Screen name="Non-Veg" component={FoodItems} />
      <Tab.Screen name="Veg" component={FoodItems} />
    </Tab.Navigator>
  );
};

export default TabView;
