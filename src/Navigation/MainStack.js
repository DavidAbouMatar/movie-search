import React, { useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import MovieScreen from "../screens/MovieScreen";
// import CustomDrawer from "../components/CustomDrawer";

export function MainStack() {
  const RootStackNav = createStackNavigator();
  const navigationRef = useRef(null);

  return (
    <NavigationContainer ref={navigationRef}>
      <RootStackNav.Navigator>
        <RootStackNav.Screen name="Movies" component={HomeScreen} />

        <RootStackNav.Screen name="MovieScreen" component={MovieScreen} />
      </RootStackNav.Navigator>
    </NavigationContainer>
  );
}
