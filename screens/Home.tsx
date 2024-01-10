import React from "react";
import { SafeAreaView, StyleSheet, View, Text, Dimensions } from "react-native";
import { globalStyles } from "../utilities/GlobalStyles";
import { Avatar, Divider, TextInput } from "react-native-paper";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import Carousel from "react-native-reanimated-carousel";
import type { ICarouselInstance } from "react-native-reanimated-carousel";

const width = Dimensions.get("window").width;

// const baseOptions = {
//   vertical: false,
//   width: PAGE_WIDTH * 0.85,
//   height: PAGE_WIDTH / 2,
// } as const;

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
                  size={38}
                  color={"grey"}
                />
              )} // where <Icon /> is any component from vector-icons or anything else
              //   onPress={() => { isPasswordSecure ? setIsPasswordSecure(false) : setIsPasswordSecure(true) }}
              // isPasswordSecure ? "eye-off" :
            />
          }
        />
        <View className="flex m-2">
          <Carousel
            loop
            width={width - 80}
            height={width / 3}
            autoPlay={true}
            data={[...new Array(6).keys()]}
            scrollAnimationDuration={1000}
            onSnapToItem={(index) => {}}
            renderItem={({ index }) => (
              <View className="flex-1 flex-row justify-center items-center border">
                <Text className="text-center">{index}</Text>
              </View>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
export default Home;
