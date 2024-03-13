import React from "react";
import { Text, View } from "react-native";
import { Avatar, Divider, TextInput } from "react-native-paper";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { globalStyles } from "../utilities/GlobalStyles";

const { textInput } = globalStyles;
const StickyHeader = () => (
  <>
    <View className="flex-row">
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
            <MaterialCommunityIcons name={"magnify"} size={30} color={"grey"} />
          )} // where <Icon /> is any component from vector-icons or anything else
          //   onPress={() => { isPasswordSecure ? setIsPasswordSecure(false) : setIsPasswordSecure(true) }}
          // isPasswordSecure ? "eye-off" :
        />
      }
    />
  </>
);

export default StickyHeader;
