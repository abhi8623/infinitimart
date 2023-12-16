import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ButtonPrimary = ({
  buttonText,
  buttonPrimaryPosition,
  buttonPrimaryBorderRadius,
  buttonPrimaryBackgroundColor,
  buttonPrimaryTop,
  buttonPrimaryLeft,
  buttonPrimaryWidth,
  buttonPrimaryMarginTop,
  buttonPrimaryMarginLeft,
  onButtonPrimaryPress,
}) => {
  const buttonPrimaryStyle = useMemo(() => {
    return {
      ...getStyleValue("position", buttonPrimaryPosition),
      ...getStyleValue("borderRadius", buttonPrimaryBorderRadius),
      ...getStyleValue("backgroundColor", buttonPrimaryBackgroundColor),
      ...getStyleValue("top", buttonPrimaryTop),
      ...getStyleValue("left", buttonPrimaryLeft),
      ...getStyleValue("width", buttonPrimaryWidth),
      ...getStyleValue("marginTop", buttonPrimaryMarginTop),
      ...getStyleValue("marginLeft", buttonPrimaryMarginLeft),
    };
  }, [
    buttonPrimaryPosition,
    buttonPrimaryBorderRadius,
    buttonPrimaryBackgroundColor,
    buttonPrimaryTop,
    buttonPrimaryLeft,
    buttonPrimaryWidth,
    buttonPrimaryMarginTop,
    buttonPrimaryMarginLeft,
  ]);

  return (
    <View
      style={[styles.buttonPrimary, buttonPrimaryStyle]}
      onPress={onButtonPrimaryPress}
    >
      <Text style={styles.addToCart}>{buttonText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  addToCart: {
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: FontFamily.dMSansBold,
    color: Color.colorsWhite,
    textAlign: "left",
  },
  buttonPrimary: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorsPrimary,
    width: 326,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_xl,
  },
});

export default ButtonPrimary;
