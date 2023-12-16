import React, { useMemo } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
} from "react-native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const TitlePage = ({
  iconChevronLeft,
  search,
  iconShoppingCart,
  titlePagePosition,
  titlePageTop,
  titlePageRight,
  titlePageLeft,
  iconShoppingCartOpacity,
  onTitlePagePress,
}) => {
  const titlePageStyle = useMemo(() => {
    return {
      ...getStyleValue("position", titlePagePosition),
      ...getStyleValue("top", titlePageTop),
      ...getStyleValue("right", titlePageRight),
      ...getStyleValue("left", titlePageLeft),
    };
  }, [titlePagePosition, titlePageTop, titlePageRight, titlePageLeft]);

  const iconShoppingCartStyle = useMemo(() => {
    return {
      ...getStyleValue("opacity", iconShoppingCartOpacity),
    };
  }, [iconShoppingCartOpacity]);

  return (
    <View style={[styles.titlePage, titlePageStyle]} onPress={onTitlePagePress}>
      <Image
        style={styles.iconChevronLeft}
        resizeMode="cover"
        source={iconChevronLeft}
      />
      <Text style={styles.search}>{search}</Text>
      <Image
        style={[styles.iconChevronLeft, iconShoppingCartStyle]}
        resizeMode="cover"
        source={iconShoppingCart}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconChevronLeft: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  search: {
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: FontFamily.dMSansBold,
    color: Color.colorsDefault,
    textAlign: "center",
  },
  titlePage: {
    backgroundColor: Color.colorsWhite,
    height: 55,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: 0,
  },
});

export default TitlePage;
