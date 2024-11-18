import { StyleSheet } from "react-native";
import { colors } from "../../ui-kit/thems/colors";
import { themeSpacing } from "../../ui-kit/thems/spacer";
import { scalePrecised } from "../../ui-kit/thems/scaler";

export const headerStyle = StyleSheet.create({
  headerText: {
    width: "100%",
    marginTop: themeSpacing(2),
    marginBottom: themeSpacing(4),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    color: colors.white,
    textAlign: "center",
    fontSize: scalePrecised(18),
  },
});
