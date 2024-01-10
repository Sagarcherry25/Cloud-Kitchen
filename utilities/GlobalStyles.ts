import React from "react";
import { Platform, StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  safeAreaWrapper: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    
  },
  container: {
    flex: 1,
    padding: 25,
  },
  pageTitle: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 30
  },
  normalText: {
    fontSize: 15,
  },
  textInput:{
    paddingLeft: 10,
    borderWidth: 1,
    borderRadius: 15,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    marginBottom: 30,
    backgroundColor: '#f5f5f5',
    borderColor: 'transparent',
  },
  primaryButton:{
    alignItems: 'center',
    backgroundColor:'#0A8791',
    padding: 15,
    borderRadius: 12,
    marginTop: 10
  },
  primaryBtnText:{
    color:'#fff',
    fontSize: 20,
    fontWeight:'bold'
  },
  anchorLink: {
    color: "#0A8791",
  },
  facebookLoginBtn:{
    backgroundColor: '#4a61a8'
  },
  googleLoginBtn:{
    backgroundColor: '#53a0f4'
  },
  toggleSwitchStyle:{
    paddingRight: Platform.OS === 'ios' ? 58 : 0
  }
});
