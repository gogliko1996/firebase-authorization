import { colors } from "../../ui-kit/thems/colors";
import { StyleSheet } from "react-native";

export const authStyles = StyleSheet.create({
  label: {
    color: "white",
    marginVertical: 10,
  },
  input: {
    backgroundColor: "white",
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
  error: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
  },
  button: {
    marginTop: 40,
    color: "white",
    height: 40,
    backgroundColor: colors.red,
    borderRadius: 4,
  },
});
