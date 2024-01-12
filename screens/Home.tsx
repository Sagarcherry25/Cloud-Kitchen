import React, { Fragment } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Dimensions,
  ScrollView,
} from "react-native";
import { globalStyles } from "../utilities/GlobalStyles";
import { Avatar, Divider, TextInput } from "react-native-paper";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import Carousel from "react-native-reanimated-carousel";
import Animated from "react-native-reanimated";
import { TouchableOpacity } from "react-native-gesture-handler";
import TabView from "../components/TabView";

const width = Dimensions.get("window").width;

// const baseOptions = {
//   vertical: false,
//   width: PAGE_WIDTH * 0.85,
//   height: PAGE_WIDTH / 2,
// } as const;

const Data = [
  {
    dishName: "Idli",
    discountText: "Get 10% Off",
    imageUrl:
      "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isOfferAvailable: "",
    couponCode: "Welcome",
  },
  {
    dishName: "Biryani",
    discountText: "Get 10% Off",
    imageUrl:
      "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isOfferAvailable: "",
    couponCode: "Welcome",
  },
  {
    dishName: "Chapathi",
    discountText: "Get 10% Off",
    imageUrl:
      "https://images.unsplash.com/photo-1633442496018-6872fbfbbcc7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isOfferAvailable: "",
    couponCode: "Welcome",
  },
  {
    dishName: "Parota",
    discountText: "Get 10% Off",
    imageUrl:
      "https://images.unsplash.com/photo-1617692855027-33b14f061079?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isOfferAvailable: "",
    couponCode: "Welcome",
  },
  {
    dishName: "Chicken",
    discountText: "Get 10% Off",
    imageUrl:
      "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isOfferAvailable: "",
    couponCode: "Welcome",
  },
];
const Home = () => {
  const { safeAreaWrapper, container, textInput } = globalStyles;

  return (
    <SafeAreaView style={safeAreaWrapper} className="android:mt-10">
      <View style={container}>
        <View className="flex flex-row">
          <View className="basis-2/12">
            <Avatar.Text size={50} label={"SC"} />
          </View>
          <View className="basis-9/12 pl-2 pt-1">
            <Text>Deliver to</Text>
            <Text className="pt-1 text-base font-extrabold">
              Manikonda, Hyderabad
            </Text>
          </View>
          <View className="basis-1/12 mt-2">
            <Feather name={"bell"} size={30} color={"black"} />
          </View>
        </View>
        <View className="mt-4">
          <Divider />
        </View>
        <TextInput
          style={textInput}
          secureTextEntry={true}
          underlineColor="transparent"
          activeUnderlineColor="lightgrey"
          right={
            <TextInput.Icon
              name={() => (
                <MaterialCommunityIcons
                  name={"magnify"}
                  size={30}
                  color={"grey"}
                />
              )} // where <Icon /> is any component from vector-icons or anything else
              //   onPress={() => { isPasswordSecure ? setIsPasswordSecure(false) : setIsPasswordSecure(true) }}
              // isPasswordSecure ? "eye-off" :
            />
          }
        />
        <ScrollView contentContainerStyle={{flex:1}} className="flex-1">
          <Carousel
            loop
            width={width - 50}
            height={width / 2}
            autoPlay={false}
            data={Data}
            scrollAnimationDuration={1000}
            onSnapToItem={(index) => {}}
            renderItem={({ item }) => (
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  overflow: "hidden",
                  alignItems: "center",
                  padding: 20,
                  borderWidth: 1,
                  borderColor: "transparent",
                  borderRadius: 25,
                }}
                className="flex-auto justify-center items-center border border-transparent rounded-3xl p-20 "
              >
                <Animated.Image
                  source={{ uri: item.imageUrl }}
                  style={{
                    width: width,
                    height: width / 2,
                    objectFit: "cover",
                    opacity: 0.8,
                  }}
                />
                <View className="absolute right-8 top-3">
                  {item.couponCode && item.discountText && (
                    <Fragment>
                      <Text className="font-extrabold text-white text-4xl">
                        {item.discountText.toLocaleUpperCase()}
                      </Text>
                      <Text className="font-extrabold text-white text-lg">
                        Use Code:
                      </Text>
                      <Text className="font-extrabold text-white text-2xl">
                        {item.couponCode.toLocaleUpperCase()}
                      </Text>
                    </Fragment>
                  )}
                  <TouchableOpacity onPress={() => console.log("Order now")}>
                    <View className="bg-[#1E1E1E] mt-2 text-center p-2 border border-transparent rounded-lg">
                      <Text className="text-white font-bold text-center">
                        {"Order now".toLocaleUpperCase()}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
          <Text>Menu</Text>
          <TabView />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;
