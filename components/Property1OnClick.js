import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1OnClick = ({ email, property1OnClickPosition }) => {
  const property1OnClickStyle = useMemo(() => {
    return {
      ...getStyleValue("position", property1OnClickPosition),
    };
  }, [property1OnClickPosition]);

  return (
    <View style={[styles.property1onClick, property1OnClickStyle]}>
      <Text style={styles.email}>{email}</Text>
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

export default Property1OnClick;
