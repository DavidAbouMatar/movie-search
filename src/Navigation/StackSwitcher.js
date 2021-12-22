import React from "react";
import { Text } from "react-native";
import { useSelector } from "react-redux";
import { MainStack } from "./MainStack";
import { AuthStack } from "./AuthStack";

export function StackSwitcher() {
  
  //gets the auth state if isLoggedIn true changes stack
  const user = useSelector((state) => state?.auth);

  return user.isLoggedIn ? <MainStack /> : <AuthStack />;
}
