/* eslint-disable no-lone-blocks */
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Profile from "../pages/Profile";
import List from "../pages/List";
import Book from "../pages/Book";
import SpotList from "../pages/SpotList";

const AppTabs = createBottomTabNavigator();

export default function AppRoutes() {
  return (
    <AppTabs.Navigator initialRouteName="Login">
      <AppTabs.Screen name="Perfil" component={Profile} />
      <AppTabs.Screen name="Procurar" component={List} />
      <AppTabs.Screen name="Reservas" component={Book} />
      <AppTabs.Screen name="SpotList" component={SpotList} />
    </AppTabs.Navigator>
  );
}
