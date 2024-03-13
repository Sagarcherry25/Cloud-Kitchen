import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import FoodItems from "./FoodItems";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createMaterialTopTabNavigator();

type Names = { name: string[] };
const TabView = (props: Names) => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={{
          swipeEnabled: false,
        }}
        sceneContainerStyle={{ backgroundColor: "transparent" }}
      >
        {props.name.map((prop) => (
          <Tab.Screen name={prop} key={prop}>
            {() => <FoodItems isHorizontal={true} />}
          </Tab.Screen>
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabView;
