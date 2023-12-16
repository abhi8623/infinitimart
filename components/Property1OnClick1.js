import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1OnClick1 = ({
  email,
  property1OnClickPosition,
  property1OnClickBackgroundColor,
  property1OnClickTop,
  property1OnClickLeft,
  property1OnClickWidth,
  property1OnClickHeight,
  emailColor,
}) => {
  const property1OnClick1Style = useMemo(() => {
    return {
      ...getStyleValue("position", property1OnClickPosition),
      ...getStyleValue("backgroundColor", property1OnClickBackgroundColor),
      ...getStyleValue("top", property1OnClickTop),
      ...getStyleValue("left", property1OnClickLeft),
      ...getStyleValue("width", property1OnClickWidth),
      ...getStyleValue("height", property1OnClickHeight),
    };
  }, [
    property1OnClickPosition,
    property1OnClickBackgroundColor,
    property1OnClickTop,
    property1OnClickLeft,
    property1OnClickWidth,
    property1OnClickHeight,
  ]);

  const emailStyle = useMemo(() => {
    return {
      ...getStyleValue("color", emailColor),
    };
  }, [emailColor]);

  return (
    <View style={[styles.property1onClick, property1OnClick1Style]}>
      <Text style={[styles.email, emailStyle]}>{email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  email: {
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: FontFamily.dMSansBold,
    color: Color.colorsDefault,
    textAlign: "left",
  },
  property1onClick: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorDodgerblue_200,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 163,
    height: 50,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_19xl,
    paddingVertical: Padding.p_3xs,
  },
});

export default Property1OnClick1;
