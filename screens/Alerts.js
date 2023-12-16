import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import TitlePage from "../components/TitlePage";
import SettingsForm from "../components/SettingsForm";
import { useNavigation } from "@react-navigation/native";
import { Color } from "../GlobalStyles";

const Alerts = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.alerts}>
      <TitlePage
        iconChevronLeft={require("../assets/icon--chevronleft1.png")}
        search="Manage"
        iconShoppingCart={require("../assets/icon--trash2.png")}
        titlePagePosition="absolute"
        titlePageTop={44}
        titlePageRight={1}
        titlePageLeft={0}
        iconShoppingCartOpacity={0}
      />
      <SettingsForm />
      <View style={styles.infinitimartLogo21Parent}>
        <Pressable
          style={styles.infinitimartLogo21}
          onPress={() => navigation.navigate("HomePage")}
        >
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/infinitimart-logo-2-1.png")}
          />
        </Pressable>
        <View style={styles.notificationParent}>
          <Pressable
            style={styles.notification}
            onPress={() => navigation.navigate("Alerts1")}
          >
            <Image
              style={[styles.icon1, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/notification.png")}
            />
          </Pressable>
          <Image
            style={[styles.walletIcon, styles.chatLayout]}
            resizeMode="cover"
            source={require("../assets/wallet.png")}
          />
          <Pressable
            style={styles.chatLayout}
            onPress={() => navigation.navigate("Inbox")}
          >
            <Image
              style={[styles.icon1, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/chat.png")}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  chatLayout: {
    marginLeft: 11,
    height: 24,
    width: 24,
  },
  infinitimartLogo21: {
    width: 164,
    height: 34,
  },
  icon1: {
    overflow: "hidden",
  },
  notification: {
    height: 24,
    width: 24,
  },
  walletIcon: {
    overflow: "hidden",
  },
  notificationParent: {
    marginLeft: 85,
    flexDirection: "row",
  },
  infinitimartLogo21Parent: {
    position: "absolute",
    top: 10,
    left: 16,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  alerts: {
    backgroundColor: Color.colorsWhite,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Alerts;
