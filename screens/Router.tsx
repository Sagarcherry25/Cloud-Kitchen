import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Tabs from "../components/Tabs";
import ForgotPassword from "./ForgotPassword";
import { RootStackParamList } from "../utilities/RouteParams";

const Stack = createNativeStackNavigator<RootStackParamList>();
const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Sign In">
      <Stack.Screen
        name="Sign In"
        component={SignIn}
        options={{ headerShadowVisible: false, headerTitleAlign: "center" }}
      />
      <Stack.Screen name="Sign Up" component={SignUp} />
      <Stack.Screen name="Forget Password" component={ForgotPassword} />
      <Stack.Screen
        name="Tabs"
        component={Tabs}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default Router;
