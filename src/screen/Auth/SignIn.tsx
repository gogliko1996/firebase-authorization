import React from "react";
import { Button, Text, TextInput, View } from "react-native";
import {
  ScreenContent,
  ScreenRoot,
} from "../../components/ScreenRoot/ScreenRoot";
import { navigate, resetStack } from "../../navigation/utils";
import { Routes } from "../../navigation/routes";
import { Header } from "../../components/Headrer/Headret";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { userSignIn } from "./redux/authSlice";
import { UserData } from "./auth.props";
import { ButtonLoader } from "../../components/Loader/Loader";
import { authStyles } from "./auth.style";
import { colors } from "../../ui-kit/thems/colors";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Invalid email address")
      .required("Email is required"),
    password: yup
      .string()
      .min(4, "Password must be at least 4 characters")
      .required("Password is required"),
  })
  .required();

export const SignIn: React.FC = () => {
  const { loading, email, error } = useSelector(
    (state: RootState) => state.user,
  );
  const dispatch = useDispatch<AppDispatch>();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: email ? email : "",
    },
  });

  const onSubmit = (data: UserData) => {
    const { email, password } = data;
    dispatch(userSignIn({ email, password })).then((data) => {
      if (data.meta.requestStatus === "fulfilled") {
        resetStack(Routes.home);
      }
    });
  };

  return (
    <ScreenRoot backgroundColor="black">
      <ScreenContent>
        <Header text="SignIn" />
        <Text style={authStyles.label}>Email</Text>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={authStyles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Enter your email"
              placeholderTextColor="#ccc"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          )}
        />
        {errors.email && (
          <Text style={authStyles.error}>{errors.email.message}</Text>
        )}

        <Text style={authStyles.label}>Password</Text>
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={authStyles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Enter your password"
              placeholderTextColor="#ccc"
              secureTextEntry
            />
          )}
        />
        {errors.password && (
          <Text style={authStyles.error}>{errors.password.message}</Text>
        )}

        {error && <Text style={authStyles.error}>{error}</Text>}

        <View style={authStyles.button}>
          {loading ? (
            <ButtonLoader />
          ) : (
            <Button
              title="Authorization"
              color={colors.white}
              onPress={handleSubmit(onSubmit)}
            />
          )}
        </View>

        <View style={authStyles.button}>
          <Button
            title="SignUp"
            color={colors.white}
            onPress={() => navigate(Routes.signUp)}
          />
        </View>
      </ScreenContent>
    </ScreenRoot>
  );
};
