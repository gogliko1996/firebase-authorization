import { Provider, useDispatch, useSelector } from "react-redux";
import store, { AppDispatch, RootState } from "./src/redux/store";
import { RootStack } from "./src/navigation/RootStack";
import React, { useEffect } from "react";
import { Loader } from "./src/components/Loader/Loader";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { userSignIn } from "./src/screen/Auth/redux/authSlice";

const MainApp: React.FC = () => {
  const { loading } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();

  const getFirebaseToken = async () => {
    const firebaseToken = await AsyncStorage.getItem("firebaseToken");

    if (firebaseToken) {
      const jsonfirebaseToken = JSON.parse(firebaseToken);

      dispatch(
        userSignIn({
          email: jsonfirebaseToken.email,
          password: jsonfirebaseToken.password,
        }),
      );
    }
  };

  useEffect(() => {
    getFirebaseToken();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return <RootStack />;
};

export default function App() {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
}
