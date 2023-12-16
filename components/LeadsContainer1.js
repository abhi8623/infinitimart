import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import AvatarSizeLargeImage from "./AvatarSizeLargeImage";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const LeadsContainer1 = () => {
  return (
    <View style={styles.leadsParent}>
      <Text style={[styles.leads, styles.leadsTypo]}>Leads</Text>
      <Text style={[styles.vcard, styles.leadsTypo]}>Vcard</Text>
      <Text style={[styles.connect, styles.leadsTypo]}>Connect+</Text>
      <View style={styles.wrapperAvatarParent}>
        <View style={styles.wrapperFlexBox}>
          <AvatarSizeLargeImage
            avatarSizeLargeImageAvata={require("../assets/avatar11.png")}
            avatarSizeLargeIconPosition="absolute"
            avatarSizeLargeIconWidth="100%"
            avatarSizeLargeIconHeight="100%"
            avatarSizeLargeIconLeft={0}
            avatarSizeLargeIconTop={4}
          />
        </View>
        <View style={[styles.wrapperAvatar1, styles.wrapperFlexBox]}>
          <AvatarSizeLargeImage
            avatarSizeLargeImageAvata={require("../assets/avatar21.png")}
            avatarSizeLargeIconPosition="absolute"
            avatarSizeLargeIconWidth="100%"
            avatarSizeLargeIconHeight="100%"
            avatarSizeLargeIconLeft={0}
            avatarSizeLargeIconTop={4}
          />
        </View>
        <View style={[styles.wrapperAvatar1, styles.wrapperFlexBox]}>
          <AvatarSizeLargeImage
            avatarSizeLargeImageAvata={require("../assets/avatar31.png")}
            avatarSizeLargeIconPosition="absolute"
            avatarSizeLargeIconWidth="100%"
            avatarSizeLargeIconHeight="100%"
            avatarSizeLargeIconLeft={0}
            avatarSizeLargeIconTop={4}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  leadsTypo: {
    textAlign: "left",
    color: Color.colorsDefault,
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    top: 101,
    position: "absolute",
  },
  wrapperFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    height: 93,
    width: 93,
  },
  leads: {
    left: 23,
  },
  vcard: {
    left: 141,
  },
  connect: {
    left: 243,
  },
  wrapperAvatar1: {
    marginLeft: 25,
  },
  wrapperAvatarParent: {
    top: 0,
    left: 0,
    flexDirection: "row",
    position: "absolute",
  },
  leadsParent: {
    top: 264,
    left: 18,
    width: 329,
    height: 122,
    position: "absolute",
  },
});

export default LeadsContainer1;
