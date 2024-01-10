/// <reference types="nativewind/types" />


import { NavigationContainer } from "@react-navigation/native";
import Router from "./screens/Router";

export default function App() {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
}