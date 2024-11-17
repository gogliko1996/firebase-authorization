import { Routes } from "./routes";

export type RootParamList = {
  [Routes.home]: undefined;
  [Routes.signIn]: undefined | any;
  [Routes.signUp]: undefined;
};

export type ScreensType = keyof RootParamList;
