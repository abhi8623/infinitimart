import React, { useMemo } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  ImageSourcePropType,
} from "react-native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const NoOfOptions5SelectedOpt = ({
  icons,
  icons1,
  icons2,
  icons3,
  icons4,
  noOfOptions5SelectedOptPosition,
  noOfOptions5SelectedOptBackgroundColor,
  noOfOptions5SelectedOptTop,
  noOfOptions5SelectedOptLeft,
  noOfOptions5SelectedOptBorderRadius,
  selectedLeft,
  homeColor,
  inboxColor,
  alertsColor,
  profileColor,
  settingsColor,
  onBottomNavigationPress,
}) => {
  const noOfOptions5SelectedOptStyle = useMemo(() => {
    return {
      ...getStyleValue("position", noOfOptions5SelectedOptPosition),
      ...getStyleValue(
        "backgroundColor",
        noOfOptions5SelectedOptBackgroundColor
      ),
      ...getStyleValue("top", noOfOptions5SelectedOptTop),
      ...getStyleValue("left", noOfOptions5SelectedOptLeft),
      ...getStyleValue("borderRadius", noOfOptions5SelectedOptBorderRadius),
    };
  }, [
    noOfOptions5SelectedOptPosition,
    noOfOptions5SelectedOptBackgroundColor,
    noOfOptions5SelectedOptTop,
    noOfOptions5SelectedOptLeft,
    noOfOptions5SelectedOptBorderRadius,
  ]);

  const selectedStyle = useMemo(() => {
    return {
      ...getStyleValue("left", selectedLeft),
    };
  }, [selectedLeft]);

  const homeStyle = useMemo(() => {
    return {
      ...getStyleValue("color", homeColor),
    };
  }, [homeColor]);

  const inboxStyle = useMemo(() => {
    return {
      ...getStyleValue("color", inboxColor),
    };
  }, [inboxColor]);

  const alertsStyle = useMemo(() => {
    return {
      ...getStyleValue("color", alertsColor),
    };
  }, [alertsColor]);

  const profileStyle = useMemo(() => {
    return {
      ...getStyleValue("color", profileColor),
    };
  }, [profileColor]);

  const settingsStyle = useMemo(() => {
    return {
      ...getStyleValue("color", settingsColor),
    };
  }, [settingsColor]);

  return (
    <View
      style={[styles.noOfOptions5SelectedOpt, noOfOptions5SelectedOptStyle]}
      onPress={onBottomNavigationPress}
    >
      <View style={[styles.selected, selectedStyle]} />
      <View style={[styles.menu1, styles.menuFlexBox]}>
        <Image style={styles.icons} resizeMode="cover" source={icons} />
        <Text style={[styles.home, styles.homeTypo, homeStyle]}>Home</Text>
      </View>
      <View style={[styles.menu2, styles.menuFlexBox]}>
        <Image style={styles.icons} resizeMode="cover" source={icons1} />
        <Text style={[styles.inbox, styles.homeTypo, inboxStyle]}>Inbox</Text>
      </View>
      <View style={[styles.menu3, styles.menuFlexBox]}>
        <Image style={styles.icons} resizeMode="cover" source={icons2} />
        <Text style={[styles.alerts, styles.homeTypo, alertsStyle]}>
          Alerts
        </Text>
      </View>
      <View style={[styles.menu4, styles.menuFlexBox]}>
        <Image style={styles.icons} resizeMode="cover" source={icons3} />
        <Text style={[styles.profile, styles.homeTypo, profileStyle]}>
          Profile
        </Text>
      </View>
      <View style={[styles.menu5, styles.menuFlexBox]}>
        <Image style={styles.icons} resizeMode="cover" source={icons4} />
        <Text style={[styles.settings, styles.homeTypo, settingsStyle]}>
          Settings
        </Text>
      </View>
    </View>
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
    left: 150,
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
    color: Color.neutral3,
    textAlign: "center",
    fontFamily: FontFamily.bodyBody14,
    fontWeight: "500",
    lineHeight: 21,
    fontSize: FontSize.bodyBody14_size,
    top: 45,
    marginLeft: -19.5,
  },
  menu1: {
    zIndex: 1,
  },
  inbox: {
    marginLeft: -17.5,
    color: Color.neutral3,
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
  alerts: {
    color: Color.primary1,
    textAlign: "center",
    fontFamily: FontFamily.bodyBody14,
    fontWeight: "500",
    lineHeight: 21,
    fontSize: FontSize.bodyBody14_size,
    top: 45,
    marginLeft: -19.5,
  },
  menu3: {
    zIndex: 3,
  },
  profile: {
    marginLeft: -20.5,
    color: Color.neutral3,
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
    color: Color.neutral3,
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
  noOfOptions5SelectedOpt: {
    backgroundColor: Color.colorsWhite,
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
  },
});

export default NoOfOptions5SelectedOpt;
