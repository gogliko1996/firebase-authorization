import { Provider } from "react-redux";
import store from "./src/redux/store";
import { RootStack } from "./src/navigation/RootStack";
import React from "react";

const MainApp: React.FC = () => {
  return <RootStack />;
};

export default function App() {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
}
