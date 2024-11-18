import React from "react";
import { Button, Text } from "react-native";
import {
  ScreenContent,
  ScreenRoot,
} from "../../components/ScreenRoot/ScreenRoot";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { resetStack } from "../../navigation/utils";
import { Routes } from "../../navigation/routes";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { logOut } from "../Auth/redux/authSlice";

export const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const logout = async () => {
    await AsyncStorage.removeItem("firebaseToken");
    dispatch(logOut);
    resetStack(Routes.signIn);
  };
  return (
    <ScreenRoot>
      <ScreenContent>
        <Text>Home</Text>
        <Button title="logOut" onPress={() => logout()} />
      </ScreenContent>
    </ScreenRoot>
  );
};
