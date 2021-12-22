import React, { useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/LoginScreen";

export function AuthStack() {
  const RootStackNav = createStackNavigator();
  const navigationRef = useRef(null);

  return (
    <NavigationContainer ref={navigationRef}>
      <RootStackNav.Navigator>
        <RootStackNav.Screen name="LoginScreen" component={LoginScreen} />


      </RootStackNav.Navigator>
    </NavigationContainer>
  );
}
