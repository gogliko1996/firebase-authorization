import type { FlexStyle } from "react-native";
import { ColorTypes } from "../../ui-kit/thems/colors";

export interface ScreenRootProps
  extends Pick<FlexStyle, "justifyContent" | "alignItems"> {
  backgroundColor?: ColorTypes;
}

export interface ScreenContentProps {
  noPadding?: boolean;
}
