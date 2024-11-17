import React from "react";
import { Button, Text } from "react-native";
import {
  ScreenContent,
  ScreenRoot,
} from "../../components/ScreenRoot/ScreenRoot";
import { navigate } from "../../navigation/utils";
import { Routes } from "../../navigation/routes";

export const SignUp: React.FC = () => {
  return (
    <ScreenRoot>
      <ScreenContent>
        <Text>SignUp</Text>
        <Button title="signIn" onPress={() => navigate(Routes.signIn)} />
      </ScreenContent>
    </ScreenRoot>
  );
};
