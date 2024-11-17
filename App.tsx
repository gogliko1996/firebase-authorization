import { Provider, useSelector } from "react-redux";
import store, { RootState } from "./src/redux/store";
import { RootStack } from "./src/navigation/RootStack";
import React, { useEffect } from "react";
import { Loader } from "./src/components/Loader/Loader";

const MainApp: React.FC = () => {
  const { loading } = useSelector((state: RootState) => state.user);

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
