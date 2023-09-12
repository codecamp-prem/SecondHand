//import { StatusBar } from "expo-status-bar";

import React from "react";
import { Button, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Screen from "./app/components/Screen";

const Tweets = ({ navigation }) => {
  return (
    <Screen style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Tweets</Text>
      <Button
        title="View Tweet"
        onPress={() => navigation.navigate("TweetDetails", { id: 1 })}
      />
    </Screen>
  );
};
const TweetDetails = ({ route }) => {
  return (
    <Screen style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Tweets TweetDetails. {route.params.id}</Text>
    </Screen>
  );
};

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Tweets" component={Tweets} />
    <Stack.Screen
      name="TweetDetails"
      component={TweetDetails}
      options={({ route }) => ({ title: `Tweet Details ${route.params.id}` })}
    />
  </Stack.Navigator>
);
export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
