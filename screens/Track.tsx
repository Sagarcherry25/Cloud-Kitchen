import React, { useRef, useState } from "react";
import {
  View,
  Text,
  Animated,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import TabView from "../components/TabView";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "../utilities/GlobalStyles";
import MapView from "react-native-maps";
import SlidingUpPanel from "rn-sliding-up-panel";
import StepIndicator from "react-native-step-indicator";
import { Avatar, Icon, IconButton } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
const Track = () => {
  const { safeAreaWrapper } = globalStyles;
  const deviceHeight = useWindowDimensions().height;

  const draggableRange = {
    top: deviceHeight / 1.15,
    bottom: deviceHeight / 3,
  };

  const snappingPoints = [draggableRange.top, draggableRange.bottom];

  const panelRef = useRef<SlidingUpPanel | null>(null);
  const [panelPositionVal] = useState(
    new Animated.Value(draggableRange.bottom)
  );

  const [isOrderPlaced, setIsOrderPlaced] = useState(true);
  const labels = ["Order Placed", "Accepted", "Preparing", "Delivered"];
  return (
    <SafeAreaView style={safeAreaWrapper}>
      {isOrderPlaced ? (
        <View>
          <View className="flex-auto">
            <MapView style={{ width: "100%", height: "100%" }} />
          </View>
          <SlidingUpPanel
            ref={panelRef}
            animatedValue={panelPositionVal}
            draggableRange={draggableRange}
            snappingPoints={snappingPoints}
            backdropOpacity={0}
            showBackdrop={false}
            height={deviceHeight - 100}
          >
            <View className="flex-1 p-5 relative bg-slate-600 opacity-100 rounded-3xl">
              <View className="flex flex-row justify-center -mt-6">
                <MaterialIcons
                  name="keyboard-arrow-down"
                  size={40}
                  color={"white"}
                />
              </View>
              <Text className="text-white font-normal text-base">
                Estimated Delivery
              </Text>
              <View className="flex flex-row py-3">
                <Text className="text-white font-bold text-5xl mr-2">
                  15:00
                </Text>
                <Text className="text-white font-normal text-base -mt-1">
                  mins {"\n"} remaining
                </Text>
              </View>
              <StepIndicator
                // customStyles={customStyles}
                currentPosition={3}
                stepCount={4}
                labels={labels}
              />
              <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                className="flex"
              >
                <View className="flex flex-row justify-between items-center mt-5 border-y-2 py-4 border-[#606161]">
                  <Text className="text-sm text-white">Delivery partner</Text>
                  <View className="flex flex-row">
                    <Avatar.Text label="JD" size={40} className="mr-2" />
                    <View className="flex">
                      <Text className="text-lg font-bold text-white">
                        John Doe
                      </Text>
                      <Text className="text-sm text-white">+91 9876543210</Text>
                    </View>
                  </View>
                  <IconButton icon={"phone"} size={30} iconColor="red" onPress={()=> console.log("Phone Icon pressed")} />
                </View>
                <View className="flex flex-row justify-between items-center border-b-2 py-4 border-[#606161]">
                  <Text className="text-sm text-white">Order ID</Text>
                  <Text className="mr-16 text-base font-bold text-white">
                    P0789654321
                  </Text>
                </View>
                <View className="flex flex-row justify-between items-center border-b-2 py-4 border-[#606161]">
                  <Text className="text-sm text-white">Payment</Text>
                  <View className="flex mr-14">
                    <Text className="text-lg text-white font-bold">
                      Card Payment
                    </Text>
                    <Text className="text-sm text-white">
                      Ending with *8754
                    </Text>
                  </View>
                </View>
                <View className="flex flex-row justify-between items-center border-b-2 py-4 border-[#606161]">
                  <Text className="text-sm text-white">Delivery Time</Text>
                  <View className="flex mr-14">
                    <Text className="text-lg text-white font-bold">Home</Text>
                    <Text className="text-sm text-white">7:30AM - 8:00AM</Text>
                  </View>
                </View>
                <View className="flex flex-row justify-between items-center py-4">
                  <Text className="text-sm text-white">My Order</Text>
                  <Text className="text-sm text-white">2 items</Text>
                </View>
                <View className="flex rounded-lg bg-white mx-3 p-5">
                  <View className="flex flex-row justify-between">
                    <Text>1 x Plain Dosa</Text>
                    <Text>₹80</Text>
                  </View>
                  <View className="flex flex-row justify-between border-b-2 border-[#e9eded] pb-3">
                    <Text>1 x Fresh Juice - Orange</Text>
                    <Text>₹110</Text>
                  </View>
                  <View className="flex flex-row justify-between">
                    <Text>1 x Plain Dosa</Text>
                    <Text>₹80</Text>
                  </View>
                  <View className="flex flex-row justify-between border-b-2 border-[#e9eded] pb-3">
                    <Text>1 x Fresh Juice - Orange</Text>
                    <Text>₹110</Text>
                  </View>
                  <View className="flex flex-row justify-between">
                    <Text>1 x Plain Dosa</Text>
                    <Text>₹80</Text>
                  </View>
                  <View className="flex flex-row justify-between border-b-2 border-[#e9eded] pb-3">
                    <Text>1 x Fresh Juice - Orange</Text>
                    <Text>₹110</Text>
                  </View>
                  <View className="flex flex-row justify-between">
                    <Text>1 x Plain Dosa</Text>
                    <Text>₹80</Text>
                  </View>
                  <View className="flex flex-row justify-between border-b-2 border-[#e9eded] pb-3">
                    <Text>1 x Fresh Juice - Orange</Text>
                    <Text>₹110</Text>
                  </View>
                  <View className="flex flex-row justify-between">
                    <Text>Sub Total</Text>
                    <Text>₹190</Text>
                  </View>
                  <View className="flex flex-row justify-between">
                    <Text>Delivery fee</Text>
                    <Text>₹30</Text>
                  </View>
                  <View className="flex flex-row justify-between pt-4">
                    <Text>Total</Text>
                    <Text>₹200</Text>
                  </View>
                </View>
              </ScrollView>
            </View>
          </SlidingUpPanel>
        </View>
      ) : (
        <View className="flex px-5">
          <Text className="font-normal text-lg">
            No Order Placed, check below food items to add into cart{" "}
          </Text>
          <View className="flex-auto mt-5">
            <TabView name={["Frequently Order", "Veg", "Non-Veg"]} />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Track;
