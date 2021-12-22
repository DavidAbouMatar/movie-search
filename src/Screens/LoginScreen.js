import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Text, View, Button, StyleSheet, TextInput } from "react-native";
import { store } from "../Redux/store";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../Redux/slices/authSlice";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const setReducerState = () => {
    const user = useSelector((state) => state.auth);

    store.dispatch(login());
  };

  // A static login that takes any credentials and logs in
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputStyle}
        placeholder="Email"
        value={email}
        onChangeText={(val) => setEmail(val)}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder="Password"
        value={password}
        onChangeText={(val) => setPassword(val)}
        maxLength={15}
        secureTextEntry={true}
      />
      <Button
        color="#3740FE"
        title="Sign in"
        onPress={() => dispatch(login())}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 35,
    backgroundColor: "#fff"
  },
  inputStyle: {
    width: "100%",
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1
  },
  loginText: {
    color: "#3740FE",
    marginTop: 25,
    textAlign: "center"
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff"
  }
});

export default LoginScreen;
