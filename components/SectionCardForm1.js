import React, { useMemo } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
} from "react-native";
import AvatarSizeLargeImage from "./AvatarSizeLargeImage";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const SectionCardForm1 = ({
  imageDimensions,
  wrapperAvatarTop,
  wrapperAvatarLeft,
  avatarIconWidth,
  avatarIconHeight,
}) => {
  const frameViewStyle = useMemo(() => {
    return {
      ...getStyleValue("top", wrapperAvatarTop),
      ...getStyleValue("left", wrapperAvatarLeft),
    };
  }, [wrapperAvatarTop, wrapperAvatarLeft]);

  const wrapperAvatarStyle = useMemo(() => {
    return {
      ...getStyleValue("width", avatarIconWidth),
      ...getStyleValue("height", avatarIconHeight),
    };
  }, [avatarIconWidth, avatarIconHeight]);

  return (
    <View style={[styles.wrapperAvatarParent, frameViewStyle]}>
      <View style={[styles.wrapperAvatar, wrapperAvatarStyle]}>
        <AvatarSizeLargeImage
          avatarSizeLargeImageAvata={require("../assets/avatar.png")}
          avatarSizeLargeIconPosition="absolute"
          avatarSizeLargeIconWidth="100%"
          avatarSizeLargeIconHeight="100%"
          avatarSizeLargeIconLeft={0}
          avatarSizeLargeIconTop={4}
        />
      </View>
      <View style={styles.nakshatraNamahaCreationsParent}>
        <Text
          style={[
            styles.nakshatraNamahaCreations,
            styles.vcodeIm2023210ContainerFlexBox,
          ]}
        >
          Nakshatra Namaha Creations
        </Text>
        <Text
          style={[
            styles.vcodeIm2023210Container,
            styles.vcodeIm2023210ContainerFlexBox,
          ]}
        >
          <Text style={styles.vcode}>
            <Text style={styles.vcode1Typo}>VCODE</Text>
            <Text style={styles.text}> :</Text>
          </Text>
          <Text style={[styles.im2023210, styles.vcode1Typo]}> IM2023210</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  vcodeIm2023210ContainerFlexBox: {
    textAlign: "left",
    letterSpacing: 0,
  },
  vcode1Typo: {
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
  },
  wrapperAvatar: {
    width: 101,
    height: 99,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  nakshatraNamahaCreations: {
    fontSize: FontSize.size_base,
    color: Color.colorsDefault,
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
  },
  text: {
    fontFamily: FontFamily.dMSansRegular,
  },
  vcode: {
    color: Color.colorsGreyDark1,
  },
  im2023210: {
    color: Color.colorsPrimary,
  },
  vcodeIm2023210Container: {
    fontSize: FontSize.bodyBody14_size,
    marginTop: 7,
  },
  nakshatraNamahaCreationsParent: {
    marginLeft: 26,
  },
  wrapperAvatarParent: {
    position: "absolute",
    top: 69,
    left: 9,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default SectionCardForm1;
