import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  useFonts,
  MouseMemoirs_400Regular,
} from "@expo-google-fonts/mouse-memoirs";
import React from "react";
const Login = () => {
  let [fontsLoaded] = useFonts({
    MouseMemoirs_400Regular,
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View>
      <ImageBackground
        source={require("../assets/Login.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <View
          style={{
            position: "absolute",

            top: 0,
            left: 0,
            right: 0,
            bottom: 0,

            alignItems: "center",
          }}
        >
          <Text style={styles.heading}>Login</Text>
          <Text style={styles.subheading}>Email Address</Text>
          <ImageBackground
            source={require("../assets/Input.png")}
            style={styles.inputbox}
          >
            <TextInput
              autoCompleteType="email"
              keyboardType="email-address"
              textContentType="emailAddress"
              placeholder="Email"
              //   onChangeText={onChangeField("email")}
              style={{ fontFamily: "MouseMemoirs_400Regular", paddingLeft: 60 }}
            />
          </ImageBackground>
          <Text style={styles.subheading}>Password</Text>
          <ImageBackground
            source={require("../assets/Input.png")}
            style={{
              width: "90%",
              resizeMode: "stretch",
              justifyContent: "center",
              height: 50,
              marginTop: 20,
              marginLeft: 40,
              flexDirection: "row",
            }}
          >
            <TextInput
              secureTextEntry
              autoCompleteType="password"
              placeholder="Password"
              // onChangeText={onChangeField("password")}
              style={{
                fontFamily: "MouseMemoirs_400Regular",
                height: 50,
                width: 220,
              }}
            />
            <Image
              source={require("../assets/eye.png")}
              style={{ height: 20, width: 20, paddingTop: 15, marginTop: 15 }}
            />
          </ImageBackground>
          <TouchableOpacity>
            <ImageBackground
              source={require("../assets/Button.png")}
              style={{
                height: 55,
                width: "60%",
                marginTop: 60,
                marginRight: "40%",
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  paddingLeft: 50,
                  paddingTop: 10,
                  fontFamily: "MouseMemoirs_400Regular",
                }}
              >
                Submit
              </Text>
            </ImageBackground>
          </TouchableOpacity>
          <Text
            style={{
              color: "white",
              paddingTop: 30,
              fontFamily: "MouseMemoirs_400Regular",
            }}
          >
            Forget Password
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  Login: {
    flex: 1,
    height: "100%",
    width: "100%",
    resizeMode: "stretch",
  },
  biggray: {
    color: "red",
    fontWeight: "bold",
    fontSize: 30,
  },
  text: {
    color: "white",
    justifyContent: "center",
    paddingTop: 40,
    fontSize: "30",
  },
  input: {
    height: 40,
  },
  heading: {
    color: "white",
    fontSize: 50,
    paddingTop: 100,
    fontFamily: "MouseMemoirs_400Regular",
  },
  subheading: {
    color: "white",
    fontSize: 30,
    paddingTop: 60,
    fontFamily: "MouseMemoirs_400Regular",
  },
  inputbox: {
    width: "90%",
    resizeMode: "stretch",
    justifyContent: "center",
    height: 50,
    marginTop: 20,
    marginLeft: 40,

    // marginRight: 20,
  },
});
