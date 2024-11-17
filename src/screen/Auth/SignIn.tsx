import React from "react";
import { Button, Text } from "react-native";
import {
  ScreenContent,
  ScreenRoot,
} from "../../components/ScreenRoot/ScreenRoot";
import { navigate } from "../../navigation/utils";
import { Routes } from "../../navigation/routes";
import { Loader } from "../../components/Loader/Loader";

export const SignIn: React.FC = () => {
  return (
    <ScreenRoot>
      <ScreenContent>
        <Text>signIn</Text>
        <Button title="signUp" onPress={() => navigate(Routes.signUp)} />
      </ScreenContent>
    </ScreenRoot>
  );
};
