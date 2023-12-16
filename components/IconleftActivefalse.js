import React, { useMemo } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
} from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const IconleftActivefalse = ({
  inputTextValue,
  textInputValue,
  showIconSearch,
  iconleftActivefalsePosition,
  iconleftActivefalseBorderRadius,
  iconleftActivefalseWidth,
  iconleftActivefalseHeight,
  iconleftActivefalseMarginTop,
  iconleftActivefalseTop,
  iconleftActivefalseLeft,
  iconleftActivefalseRight,
}) => {
  const iconleftActivefalseStyle = useMemo(() => {
    return {
      ...getStyleValue("position", iconleftActivefalsePosition),
      ...getStyleValue("borderRadius", iconleftActivefalseBorderRadius),
      ...getStyleValue("width", iconleftActivefalseWidth),
      ...getStyleValue("height", iconleftActivefalseHeight),
      ...getStyleValue("marginTop", iconleftActivefalseMarginTop),
      ...getStyleValue("top", iconleftActivefalseTop),
      ...getStyleValue("left", iconleftActivefalseLeft),
      ...getStyleValue("right", iconleftActivefalseRight),
    };
  }, [
    iconleftActivefalsePosition,
    iconleftActivefalseBorderRadius,
    iconleftActivefalseWidth,
    iconleftActivefalseHeight,
    iconleftActivefalseMarginTop,
    iconleftActivefalseTop,
    iconleftActivefalseLeft,
    iconleftActivefalseRight,
  ]);

  return (
    <View style={[styles.iconleftActivefalse, iconleftActivefalseStyle]}>
      {showIconSearch && (
        <Image
          style={styles.iconSearch}
          resizeMode="cover"
          source={inputTextValue}
        />
      )}
      <Text style={styles.inputText}>{textInputValue}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconSearch: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  inputText: {
    fontSize: FontSize.bodyBody14_size,
    letterSpacing: 0,
    lineHeight: 20,
    fontFamily: FontFamily.dMSansRegular,
    color: Color.colorsGrey,
    textAlign: "left",
    marginLeft: 12,
  },
  iconleftActivefalse: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorsWhite,
    borderStyle: "solid",
    borderColor: Color.colorsGrey,
    borderWidth: 1,
    height: 45,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Padding.p_mini,
    paddingVertical: 0,
  },
});

export default IconleftActivefalse;
