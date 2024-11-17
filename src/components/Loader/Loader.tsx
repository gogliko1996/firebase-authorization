import { ActivityIndicator, View } from "react-native";
import { LoaderStyle } from "./Loader.style";

export const Loader = () => {
  return (
    <View style={LoaderStyle.loaderLoacation}>
      <ActivityIndicator size={"large"} animating color={"red"} />
    </View>
  );
};

export const ButtonLoader = () => {
  return <ActivityIndicator size={"small"} animating color={"red"} />;
};
