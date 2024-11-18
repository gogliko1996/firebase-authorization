import React from "react";
import { Text, View } from "react-native";
import { HeaderProps } from "./header.props";
import { headerStyle } from "./header.style";

export const Header: React.FC<HeaderProps> = (props) => {
  const { text } = props;
  return (
    <View style={headerStyle.headerText}>
      <Text style={headerStyle.textStyle}>{text}</Text>
    </View>
  );
};
