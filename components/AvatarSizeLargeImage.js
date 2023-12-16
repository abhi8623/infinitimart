import React, { useMemo } from "react";
import { Image, StyleSheet, ImageSourcePropType } from "react-native";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const AvatarSizeLargeImage = ({
  avatarSizeLargeImageAvata,
  avatarSizeLargeIconPosition,
  avatarSizeLargeIconWidth,
  avatarSizeLargeIconHeight,
  avatarSizeLargeIconLeft,
  avatarSizeLargeIconTop,
}) => {
  const avatarSizeLargeIconStyle = useMemo(() => {
    return {
      ...getStyleValue("position", avatarSizeLargeIconPosition),
      ...getStyleValue("width", avatarSizeLargeIconWidth),
      ...getStyleValue("height", avatarSizeLargeIconHeight),
      ...getStyleValue("left", avatarSizeLargeIconLeft),
      ...getStyleValue("top", avatarSizeLargeIconTop),
    };
  }, [
    avatarSizeLargeIconPosition,
    avatarSizeLargeIconWidth,
    avatarSizeLargeIconHeight,
    avatarSizeLargeIconLeft,
    avatarSizeLargeIconTop,
  ]);

  return (
    <Image
      style={[styles.avatarSizelargeIcon, avatarSizeLargeIconStyle]}
      resizeMode="cover"
      source={avatarSizeLargeImageAvata}
    />
  );
};

const styles = StyleSheet.create({
  avatarSizelargeIcon: {
    width: 75,
    height: 75,
  },
});

export default AvatarSizeLargeImage;
