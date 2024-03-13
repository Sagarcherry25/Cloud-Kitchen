import React from "react";
import { View, Text } from "react-native";
import TabView from "../components/TabView";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "../utilities/GlobalStyles";

const Track = () => {
  const { safeAreaWrapper } = globalStyles;
  return (
    <SafeAreaView style={safeAreaWrapper}>
      <View className="flex-1 p-5">
        <Text className="font-normal text-lg">
          No Order Placed, check below food items to add into cart{" "}
        </Text>
        <View className="flex-auto mt-5">
          <TabView name={["Frequently Order", "Veg", "Non-Veg"]} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Track;
