import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const SettingsForm = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.bottomNavigation54}
      onPress={() => navigation.navigate("HomePage")}
    >
      <View style={styles.selected} />
      <View style={[styles.menu1, styles.menuFlexBox]}>
        <Image
          style={styles.icons}
          resizeMode="cover"
          source={require("../assets/icons81.png")}
        />
        <Text style={[styles.home, styles.homeTypo]}>Home</Text>
      </View>
      <Pressable
        style={[styles.menu2, styles.menuFlexBox]}
        onPress={() => navigation.navigate("Inbox")}
      >
        <Image
          style={styles.icons}
          resizeMode="cover"
          source={require("../assets/icons91.png")}
        />
        <Text style={[styles.inbox, styles.homeTypo]}>Inbox</Text>
      </Pressable>
      <Pressable
        style={[styles.menu3, styles.menuFlexBox]}
        onPress={() => navigation.navigate("Alerts1")}
      >
        <Image
          style={styles.icons}
          resizeMode="cover"
          source={require("../assets/icons101.png")}
        />
        <Text style={[styles.home, styles.homeTypo]}>Alerts</Text>
      </Pressable>
      <View style={[styles.menu4, styles.menuFlexBox]}>
        <Image
          style={styles.icons}
          resizeMode="cover"
          source={require("../assets/icons111.png")}
        />
        <Text style={[styles.profile, styles.homeTypo]}>Profile</Text>
      </View>
      <Pressable
        style={[styles.menu5, styles.menuFlexBox]}
        onPress={() => navigation.navigate("Frame7")}
      >
        <Image
          style={styles.icons}
          resizeMode="cover"
          source={require("../assets/icons121.png")}
        />
        <Text style={[styles.settings, styles.homeTypo]}>Settings</Text>
      </Pressable>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  menuFlexBox: {
    overflow: "hidden",
    flex: 1,
    height: 74,
  },
  homeTypo: {
    textAlign: "center",
    fontFamily: FontFamily.bodyBody14,
    fontWeight: "500",
    lineHeight: 21,
    fontSize: FontSize.bodyBody14_size,
    top: 45,
    left: "50%",
    position: "absolute",
  },
  selected: {
    top: 0,
    left: 225,
    backgroundColor: Color.colorRoyalblue_100,
    width: 75,
    zIndex: 0,
    height: 74,
    position: "absolute",
  },
  icons: {
    height: "27.03%",
    marginLeft: -9.5,
    top: "21.62%",
    bottom: "51.35%",
    maxHeight: "100%",
    width: 20,
    left: "50%",
    overflow: "hidden",
    position: "absolute",
  },
  home: {
    marginLeft: -19.5,
    color: Color.colorsDefault,
    textAlign: "center",
    fontFamily: FontFamily.bodyBody14,
    fontWeight: "500",
    lineHeight: 21,
    fontSize: FontSize.bodyBody14_size,
    top: 45,
  },
  menu1: {
    zIndex: 1,
  },
  inbox: {
    marginLeft: -17.5,
    color: Color.colorsDefault,
    textAlign: "center",
    fontFamily: FontFamily.bodyBody14,
    fontWeight: "500",
    lineHeight: 21,
    fontSize: FontSize.bodyBody14_size,
    top: 45,
  },
  menu2: {
    zIndex: 2,
  },
  menu3: {
    zIndex: 3,
  },
  profile: {
    marginLeft: -20.5,
    color: Color.primary1,
    textAlign: "center",
    fontFamily: FontFamily.bodyBody14,
    fontWeight: "500",
    lineHeight: 21,
    fontSize: FontSize.bodyBody14_size,
    top: 45,
  },
  menu4: {
    zIndex: 4,
  },
  settings: {
    marginLeft: -27.5,
    color: Color.colorsDefault,
    textAlign: "center",
    fontFamily: FontFamily.bodyBody14,
    fontWeight: "500",
    lineHeight: 21,
    fontSize: FontSize.bodyBody14_size,
    top: 45,
  },
  menu5: {
    zIndex: 5,
  },
  bottomNavigation54: {
    top: 738,
    left: 0,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorDodgerblue_200,
    shadowColor: "rgba(0, 87, 184, 0.05)",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    width: 375,
    flexDirection: "row",
    position: "absolute",
  },
});

export default SettingsForm;
