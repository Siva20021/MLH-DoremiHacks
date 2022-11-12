import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/Home";
import Login from "./screens/Login";

export default function App() {
  return (
    <View>
      <Home />
      {/* <Login /> */}
      {/* <Text>Hello</Text> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({});
