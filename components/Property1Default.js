import React, { useMemo } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  ImageSourcePropType,
} from "react-native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1Default = ({
  keyField,
  startCursor,
  valueMasked,
  property1DefaultPosition,
  property1DefaultTop,
  property1DefaultLeft,
  property1DefaultBorderRadius,
  property1DefaultBackgroundColor,
  property1DefaultBorderStyle,
  property1DefaultBorderColor,
  property1DefaultBorderWidth,
  property1DefaultWidth,
  property1DefaultHeight,
  boxBorderRadius,
  boxBorderColor,
  keyFieldFontSize,
  keyFieldColor,
  keyFieldFontFamily,
  valueMaskedIconWidth,
}) => {
  const property1DefaultStyle = useMemo(() => {
    return {
      ...getStyleValue("position", property1DefaultPosition),
      ...getStyleValue("top", property1DefaultTop),
      ...getStyleValue("left", property1DefaultLeft),
      ...getStyleValue("borderRadius", property1DefaultBorderRadius),
      ...getStyleValue("backgroundColor", property1DefaultBackgroundColor),
      ...getStyleValue("borderStyle", property1DefaultBorderStyle),
      ...getStyleValue("borderColor", property1DefaultBorderColor),
      ...getStyleValue("borderWidth", property1DefaultBorderWidth),
      ...getStyleValue("width", property1DefaultWidth),
      ...getStyleValue("height", property1DefaultHeight),
    };
  }, [
    property1DefaultPosition,
    property1DefaultTop,
    property1DefaultLeft,
    property1DefaultBorderRadius,
    property1DefaultBackgroundColor,
    property1DefaultBorderStyle,
    property1DefaultBorderColor,
    property1DefaultBorderWidth,
    property1DefaultWidth,
    property1DefaultHeight,
  ]);

  const boxStyle = useMemo(() => {
    return {
      ...getStyleValue("borderRadius", boxBorderRadius),
      ...getStyleValue("borderColor", boxBorderColor),
    };
  }, [boxBorderRadius, boxBorderColor]);

  const keyFieldStyle = useMemo(() => {
    return {
      ...getStyleValue("fontSize", keyFieldFontSize),
      ...getStyleValue("color", keyFieldColor),
      ...getStyleValue("fontFamily", keyFieldFontFamily),
    };
  }, [keyFieldFontSize, keyFieldColor, keyFieldFontFamily]);

  const valueMaskedIconStyle = useMemo(() => {
    return {
      ...getStyleValue("width", valueMaskedIconWidth),
    };
  }, [valueMaskedIconWidth]);

  return (
    <View style={[styles.property1default, property1DefaultStyle]}>
      <Text style={[styles.errorMessage, styles.keyFieldTypo]}>Name</Text>
      <View style={[styles.box, boxStyle]} />
      <Text style={[styles.keyField, styles.keyFieldTypo, keyFieldStyle]}>
        {keyField}
      </Text>
      <View style={styles.valueMain}>
        <Image
          style={styles.startCursorIcon}
          resizeMode="cover"
          source={startCursor}
        />
        <Image
          style={[styles.valueMaskedIcon, valueMaskedIconStyle]}
          resizeMode="cover"
          source={valueMasked}
        />
        <Image
          style={styles.startCursorIcon}
          resizeMode="cover"
          source={require("../assets/end-cursor.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  keyFieldTypo: {
    opacity: 0.8,
    textAlign: "left",
    fontFamily: FontFamily.montserratRegular,
    position: "absolute",
  },
  errorMessage: {
    top: "38.33%",
    left: 0,
    fontSize: FontSize.size_xs,
    color: Color.colorRed,
  },
  box: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 4,
    backgroundColor: Color.colorsWhite,
    borderStyle: "solid",
    borderColor: "#d5d8de",
    borderWidth: 1,
    position: "absolute",
  },
  keyField: {
    top: "33.33%",
    left: 16,
    fontSize: FontSize.size_base,
    color: "#323941",
  },
  startCursorIcon: {
    width: 0,
    height: 18,
    opacity: 0,
  },
  valueMaskedIcon: {
    width: 79,
    height: 20,
    overflow: "hidden",
  },
  valueMain: {
    top: 26,
    left: 17,
    height: 28,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  property1default: {
    width: 327,
    height: 60,
  },
});

export default Property1Default;
