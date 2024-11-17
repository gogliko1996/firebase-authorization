import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserObject, UserState } from "./authSlice.props";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../../../firebase";
import { Routes } from "../../../navigation/routes";
import { RootState } from "../../../redux/store";

const initialState: UserState = {
  loading: false,
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
      console.log("User registered:", userCredential.user);
      return userCredential.user.email;
    } catch (error: any) {
      console.error("Error during registration:", error);
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
      console.log("User registered:", userCredential.user);
      return userCredential.user.email;
    } catch (error: any) {
      console.error("Error during registration:", error);
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
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(userSignUp.pending, (state) => {
        state.loading = true;
      })
      .addCase(userSignUp.fulfilled, (state, action) => {
        state.loading = false;
        state.email = action.payload;
      })
      .addCase(userSignUp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message as string;
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
        state.error = action.error.message as string;
      });
  },
});

export default createAuthSlice.reducer;
