import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View ,StatusBar } from "react-native";

import Routes from "./routes";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#999" barStyle="light-content" />
      <View style={{ flex: 1, backgroundColor: '#fff' }} >
        <Routes />
      </View>
    </NavigationContainer>
  );
}
