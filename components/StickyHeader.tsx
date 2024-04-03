import React from "react";
import { Text, View } from "react-native";
import { Avatar, Button, TextInput } from "react-native-paper";
import {
  Feather,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { globalStyles } from "../utilities/GlobalStyles";
import { Link } from "@react-navigation/native";

const { textInput } = globalStyles;
const StickyHeader = () => (
  <View
    style={{
      elevation: 3,
      backgroundColor: "#fff",
    }}
  >
    <View className="flex-row mb-3 z-50">
      <View className="basis-2/12">
        <Avatar.Text size={50} label={"S"} />
      </View>
      <View className="basis-9/12">
        <Link to={{ screen: "Maps" }}>
          <Button
            compact={true}
            contentStyle={{ flexDirection: "row-reverse" }}
            icon={() => (
              <MaterialIcons
                name="keyboard-arrow-down"
                size={25}
                color={"black"}
              />
            )}
            textColor="black"
          >
            Home
          </Button>
        </Link>
        <Text className="text-base font-extrabold -mt-2 ml-2">
          Manikonda, Hyderabad
        </Text>
      </View>
      <View className="basis-1/12 mt-2">
        <Feather name={"bell"} size={30} color={"black"} />
      </View>
    </View>
    <TextInput
      style={[textInput, { marginBottom: 0 }]}
      mode="outlined"
      activeOutlineColor="transparent"
      outlineColor="transparent"
      right={
        <TextInput.Icon
          icon={() => (
            <MaterialCommunityIcons name={"magnify"} size={30} color={"grey"} />
          )} // where <Icon /> is any component from vector-icons or anything else
          //   onPress={() => { isPasswordSecure ? setIsPasswordSecure(false) : setIsPasswordSecure(true) }}
          // isPasswordSecure ? "eye-off" :
        />
      }
    />
  </View>
);

export default StickyHeader;
