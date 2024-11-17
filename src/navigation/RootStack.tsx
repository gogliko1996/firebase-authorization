import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { navigationRef } from "./utils";
import { RootParamList } from "./RootParamsList";

import { useSelector } from "react-redux";
// import { selectInitialRouteNameForUser } from "../screen/Auth/authRedux";
import { Routes } from "./routes";
import { SignIn } from "../screen/Auth/SignIn";
import { SignUp } from "../screen/Auth/SingUp";
import { Home } from "../screen/Home/Home";

const Stack = createStackNavigator<RootParamList>();

export const RootStack = () => {
  // const initialRouteName = useSelector(selectInitialRouteNameForUser);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName={Routes.signIn}>
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
