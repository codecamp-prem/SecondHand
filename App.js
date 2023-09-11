//import { StatusBar } from "expo-status-bar";
import { Platform, Switch, Text, TextInput, View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./app/components/AppText";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingScreen from "./app/screens/ListingScreen";
import { useState } from "react";
import AppTextInput from "./app/components/AppTextInput";
import AppNativePicker from "./app/components/AppNativePicker";
import LoginScreen from "./app/screens/LoginScreen";

// const selectOptions = [
//   { label: "Programming Skills", value: "" },
//   { label: "System Design", value: "system_design" },
//   { label: "Database Design", value: "database_design" },
//   { label: "React", value: "react" },
//   { label: "React Native", value: "react_native" },
//   { label: "Rust", value: "rust" },
//   { label: "Mathematics", value: "mathematics" },
// ];
{
  /* <Screen>
      <AppNativePicker selectOptions={selectOptions} />
    </Screen> */
}
export default function App() {
  return <LoginScreen />;
}
