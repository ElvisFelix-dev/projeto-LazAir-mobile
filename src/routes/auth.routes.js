/* eslint-disable no-lone-blocks */
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Profile from "../pages/Profile";
import List from "../pages/List";
import Book from "../pages/Book";
import SpotList from "../pages/SpotList";


const AppTabs = createBottomTabNavigator();

const icons = {
  Perfil: {
    name: 'ios-home'
  }
}

export default function AppRoutes() {
  return (
    <AppTabs.Navigator
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        style: {
          backgroundColor: '#fff'
        }
      }}
    >
      <AppTabs.Screen name="Perfil" component={Profile}
         options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-circle" color={color} size={size} />
          ),
        }}
      />
      <AppTabs.Screen name="Procurar" component={List}
           options={{
            tabBarLabel: 'Procurar',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="layers-search-outline" color={color} size={size} />
            ),
          }}
      />
      <AppTabs.Screen name="Reservas" component={Book}
          options={{
            tabBarLabel: 'Reservas',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account-cash" color={color} size={size} />
            ),
          }}
      />
      <AppTabs.Screen name="SpotList" component={SpotList}
          options={{
            tabBarLabel: 'SpotList',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="format-list-checkbox" color={color} size={size} />
            ),
          }}
      />
    </AppTabs.Navigator>
  );
}
