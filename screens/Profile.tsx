import { Link } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";
import { globalStyles } from "../utilities/GlobalStyles";

const Profile = () => {
  const { anchorLink } = globalStyles;
  return (
    <View>
      <Text>Profile In Progress</Text>
      <Link style={anchorLink} to={{ screen: "Sign In" }}>
        Logout
      </Link>
    </View>
  );
};

export default Profile;
