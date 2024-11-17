import { configureStore } from "@reduxjs/toolkit";
import createAuthSlice from "../screen/Auth/redux/authSlice";

const store = configureStore({
  reducer: {
    user: createAuthSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
