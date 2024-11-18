import { StyleSheet } from "react-native";
import { themeSpacing } from "../../ui-kit/thems/spacer";

export const LoaderStyle = StyleSheet.create({
  loaderLoacation: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonLoader: {
    marginTop: themeSpacing(1),
  },
});
