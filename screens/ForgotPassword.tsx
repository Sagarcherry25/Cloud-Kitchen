import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "../utilities/GlobalStyles";
import { TextInput } from "react-native-paper";

const ForgotPassword = () => {
  const {
    safeAreaWrapper,
    container,
    pageTitle,
    normalText,
    textInput,
    primaryButton,
    primaryBtnText,
  } = globalStyles;
  const { signInWrapper } = styles;
  return (
    <SafeAreaView style={safeAreaWrapper}>
      <View style={container}>
        <Text style={pageTitle}>Forget Password</Text>
        <Text style={normalText}>
          Please Enter your Email address so we can help you Recover your
          password
        </Text>
        <View style={signInWrapper}>
          <TextInput
            style={textInput}
            placeholder="Username"
            underlineColor="transparent"
            activeUnderlineColor="lightgrey"
          />
          <TouchableOpacity
            onPress={() => console.log("Simple Button pressed")}
          >
            <View style={primaryButton}>
              <Text style={primaryBtnText}>Reset Password</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  signInWrapper: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
});

export default ForgotPassword;
