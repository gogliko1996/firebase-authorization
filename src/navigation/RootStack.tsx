import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { navigationRef } from "./utils";
import { RootParamList } from "./RootParamsList";

import { useSelector } from "react-redux";

import { Routes } from "./routes";
import { SignIn } from "../screen/Auth/SignIn";
import { SignUp } from "../screen/Auth/SingUp";
import { Home } from "../screen/Home/Home";
import { selectInitialRouteNameForUser } from "../screen/Auth/redux/authSlice";

const Stack = createStackNavigator<RootParamList>();

export const RootStack = () => {
  const initialRouteName = useSelector(selectInitialRouteNameForUser);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName={initialRouteName}>
        <Stack.Screen
          name={Routes.home}
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={Routes.signIn}
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={Routes.signUp}
          component={SignUp}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
