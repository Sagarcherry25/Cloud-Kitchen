import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { globalStyles } from "../utilities/GlobalStyles";
import { TextInput } from "react-native-paper";
import { Link } from "@react-navigation/native";

const SignUp = () => {
  const {
    safeAreaWrapper,
    container,
    pageTitle,
    normalText,
    textInput,
    primaryButton,
    primaryBtnText,
    anchorLink,
    facebookLoginBtn,
    googleLoginBtn,
  } = globalStyles;
  const { signInWrapper } = styles;
  return (
    <SafeAreaView style={safeAreaWrapper}>
      <View style={container}>
        <Text style={pageTitle}>Create Account</Text>

        <Text style={normalText}>
          Enter your Name, Email and Password for sign up.
        </Text>
        <Link
          to={{ screen: "Sign In" }}
          style={[anchorLink, { marginTop: 5 }]}
        >
          Already have an account ?
        </Link>
        <View style={signInWrapper}>
          <TextInput
            style={textInput}
            placeholder="Username"
            underlineColor="transparent"
            activeUnderlineColor="lightgrey"
          />
          <TextInput
            style={textInput}
            placeholder="Email address"
            underlineColor="transparent"
            activeUnderlineColor="lightgrey"
          />
          <TextInput
            style={textInput}
            placeholder="Password"
            textContentType="password"
            secureTextEntry={true}
            underlineColor="transparent"
            activeUnderlineColor="lightgrey"
            right={
              <TextInput.Icon
                icon={() => (
                  <MaterialCommunityIcons
                    name={"eye-off"}
                    size={20}
                    color={"grey"}
                  />
                )} // where <Icon /> is any component from vector-icons or anything else
                //   onPress={() => { isPasswordSecure ? setIsPasswordSecure(false) : setIsPasswordSecure(true) }}
                // isPasswordSecure ? "eye-off" :
              />
            }
          />

          <TouchableOpacity
            onPress={() => console.log("Simple Button pressed")}
          >
            <View style={primaryButton}>
              <Text style={primaryBtnText}>Create Account</Text>
            </View>
          </TouchableOpacity>

          <View
            style={{ alignItems: "center", marginTop: 20, marginBottom: 20 }}
          >
            <Text style={normalText}>OR</Text>
          </View>
          <View>
            <TouchableOpacity>
              <View
                style={[
                  primaryButton,
                  facebookLoginBtn,
                  {
                    marginBottom: 15,
                    alignContent: "center",
                    flexDirection: "row",
                    justifyContent: "space-around",
                  },
                ]}
              >
                <MaterialCommunityIcons name="facebook" size={30} />
                <Text style={primaryBtnText}>Connect With Facebook</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={[
                  primaryButton,
                  googleLoginBtn,
                  {
                    alignContent: "center",
                    flexDirection: "row",
                    justifyContent: "space-around",
                  },
                ]}
              >
                <MaterialCommunityIcons name="google" size={28} />
                <Text style={primaryBtnText}>Connect With Google</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  signInWrapper: {
    flex: 1,
    marginTop: 40,
  },
});

export default SignUp;
