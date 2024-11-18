import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserObject, UserState } from "./authSlice.props";
import {
  createUserWithEmailAndPassword,
  getIdToken,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../../../firebase";
import { Routes } from "../../../navigation/routes";
import { RootState } from "../../../redux/store";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState: UserState = {
  loading: false,
  userSignUpLoading: false,
  email: null,
  user: null,
  error: null,
};

export const userSignUp = createAsyncThunk(
  "userSignUp/userAuth",
  async ({ email, password }: UserObject, { rejectWithValue }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      return userCredential.user.email;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

export const userSignIn = createAsyncThunk(
  "userSignIn/userAuth",
  async ({ email, password }: UserObject, { rejectWithValue }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );

      if (userCredential.user) {
        await AsyncStorage.setItem(
          "firebaseToken",
          JSON.stringify({ email, password }),
        );
      }

      return userCredential.user.email;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);
export const selectInitialRouteNameForUser = (state: RootState) => {
  return state.user.user ? Routes.home : Routes.signIn;
};

const createAuthSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    logOut: (state) => {
      state.user = null;
      state.user = null;
      state.email = null;
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(userSignUp.pending, (state) => {
        state.userSignUpLoading = true;
      })
      .addCase(userSignUp.fulfilled, (state, action) => {
        state.userSignUpLoading = false;
        state.email = action.payload;
      })
      .addCase(userSignUp.rejected, (state, action) => {
        state.userSignUpLoading = false;
        state.error = action.payload
          ? "This user already exists."
          : (action.error.message as string);
      });

    builder
      .addCase(userSignIn.pending, (state) => {
        state.loading = true;
      })
      .addCase(userSignIn.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(userSignIn.rejected, (state, action) => {
        state.loading = false;

        console.log(action.payload);
        state.error = action.payload
          ? "The password or email is incorrect."
          : (action.error as string);
      });
  },
});
export const { logOut } = createAuthSlice.actions;
export default createAuthSlice.reducer;
