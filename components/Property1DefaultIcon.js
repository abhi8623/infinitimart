import React, { useMemo } from "react";
import { Image, StyleSheet, ImageSourcePropType } from "react-native";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1DefaultIcon = ({
  property1DefaultIconPrope,
  property1DefaultIconWidth,
  property1DefaultIconHeight,
  property1DefaultIconMarginLeft,
}) => {
  const property1DefaultIconStyle = useMemo(() => {
    return {
      ...getStyleValue("width", property1DefaultIconWidth),
      ...getStyleValue("height", property1DefaultIconHeight),
      ...getStyleValue("marginLeft", property1DefaultIconMarginLeft),
    };
  }, [
    property1DefaultIconWidth,
    property1DefaultIconHeight,
    property1DefaultIconMarginLeft,
  ]);

  return (
    <Image
      style={[styles.property1defaultIcon, property1DefaultIconStyle]}
      resizeMode="cover"
      source={property1DefaultIconPrope}
    />
  );
};

const styles = StyleSheet.create({
  property1defaultIcon: {
    width: 40,
    height: 10,
  },
});

export default Property1DefaultIcon;
