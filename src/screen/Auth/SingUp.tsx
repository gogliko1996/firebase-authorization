import React from "react";
import { Button, Text, TextInput, View } from "react-native";
import {
  ScreenContent,
  ScreenRoot,
} from "../../components/ScreenRoot/ScreenRoot";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { authStyles } from "./auth.style";
import { colors } from "../../ui-kit/thems/colors";
import { navigate } from "../../navigation/utils";
import { Routes } from "../../navigation/routes";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { userSignUp } from "./redux/authSlice";
import { UserData } from "./auth.props";
import { ButtonLoader } from "../../components/Loader/Loader";
import { Header } from "../../components/Headrer/Headret";

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
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
  })
  .required();

export const SignUp: React.FC = () => {
  const { userSignUpLoading, error } = useSelector(
    (state: RootState) => state.user,
  );
  const dispatch = useDispatch<AppDispatch>();

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: UserData) => {
    const { email, password } = data;
    dispatch(userSignUp({ email, password })).then((data) => {
      if (data.meta.requestStatus === "fulfilled") {
        navigate(Routes.signIn);
      }
      reset({
        email: "",
        password: "",
        confirmPassword: "",
      });
    });
  };

  return (
    <ScreenRoot backgroundColor="black">
      <ScreenContent>
        <Header text="SignUp" />
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

        <Text style={authStyles.label}>Confirm Password</Text>
        <Controller
          control={control}
          name="confirmPassword"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={authStyles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Confirm your password"
              placeholderTextColor="#ccc"
              secureTextEntry
            />
          )}
        />
        {errors.confirmPassword && (
          <Text style={authStyles.error}>{errors.confirmPassword.message}</Text>
        )}

        {error && <Text style={authStyles.error}>{error}</Text>}

        <View style={authStyles.button}>
          {userSignUpLoading ? (
            <ButtonLoader />
          ) : (
            <Button
              title="Register"
              color={colors.white}
              onPress={handleSubmit(onSubmit)}
            />
          )}
        </View>

        <View style={authStyles.button}>
          <Button
            title="SignIn"
            color={colors.white}
            onPress={() => navigate(Routes.signIn)}
          />
        </View>
      </ScreenContent>
    </ScreenRoot>
  );
};
