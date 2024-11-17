import React from "react";
import { Text } from "react-native";
import {
  ScreenContent,
  ScreenRoot,
} from "../../components/ScreenRoot/ScreenRoot";

export const Home: React.FC = () => {
  return (
    <ScreenRoot>
      <ScreenContent>
        <Text>Home</Text>
      </ScreenContent>
    </ScreenRoot>
  );
};
