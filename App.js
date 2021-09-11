import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./Navigation/DrawerNavigatior";

import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "./Google/Login";
import LoadingScreen from "./Google/Loading";
import DashboardScreen from "./Google/Dashboard";

import * as firebase from "firebase";
import { firebaseConfig } from "./config";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
