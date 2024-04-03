import React, { useState } from "react";
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { globalStyles } from "../utilities/GlobalStyles";
import { Switch, TextInput } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Link } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../utilities/RouteParams";

type Props = NativeStackScreenProps<RootStackParamList, "Sign In">;

const SignIn = ({ navigation }: Props) => {
  const {
    safeAreaWrapper,
    container,
    pageTitle,
    normalText,
    textInput,
    primaryButton,
    primaryBtnText,
    facebookLoginBtn,
    googleLoginBtn,
    anchorLink,
    toggleSwitchStyle,
  } = globalStyles;
  const {
    signInWrapper,
    rememberMeAndForgetText,
    rememberMeAndForgetSection,
    rememberMeSection,
  } = styles;

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <SafeAreaView style={safeAreaWrapper}>
      <View style={container}>
        <Text style={pageTitle}>Welcome to</Text>
        <Text style={normalText}>
          Enter your Phone Number or Email address for sign in. Enjoy your food.
        </Text>
        <View style={signInWrapper}>
          <TextInput
            style={textInput}
            placeholder="Username"
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
          <View style={rememberMeAndForgetSection}>
            <View style={rememberMeSection}>
              <Switch
                style={toggleSwitchStyle}
                onValueChange={toggleSwitch}
                value={isEnabled}
                color={"#0A8791"}
              />
              <Text style={rememberMeAndForgetText}>Remember me</Text>
            </View>
            <Link
              style={[rememberMeAndForgetText, anchorLink]}
              to={{ screen: "Forget Password" }}
            >
              Forgot Password ?
            </Link>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Tabs")}>
            <View style={primaryButton}>
              <Text style={primaryBtnText}>Sign In</Text>
            </View>
          </TouchableOpacity>

          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 15,
            }}
          >
            <Text style={normalText}>Don't have an account ? </Text>
            <Link to={{ screen: "Sign Up" }} style={anchorLink}>
              Signup
            </Link>
          </View>
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
  rememberMeAndForgetSection: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rememberMeSection: {
    alignSelf: "flex-start",
    flexDirection: "row",
  },
  rememberMeAndForgetText: {
    marginTop: Platform.OS === "ios" ? 6 : 13,
    fontWeight: "500",
  },
});

export default SignIn;
