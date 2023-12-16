import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TitlePage from "../components/TitlePage";
import NoOfOptions5SelectedOpt from "../components/NoOfOptions5SelectedOpt";
import { Color } from "../GlobalStyles";

const Inbox = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.inbox}>
      <TitlePage
        iconChevronLeft={require("../assets/icon--chevronleft1.png")}
        search="inbox"
        iconShoppingCart={require("../assets/icon--trash2.png")}
        titlePagePosition="absolute"
        titlePageTop={44}
        titlePageRight={1}
        titlePageLeft={0}
        iconShoppingCartOpacity={0}
      />
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
      <NoOfOptions5SelectedOpt
        icons={require("../assets/icons81.png")}
        icons1={require("../assets/icons71.png")}
        icons2={require("../assets/icons101.png")}
        icons3={require("../assets/icons131.png")}
        icons4={require("../assets/icons121.png")}
        noOfOptions5SelectedOptPosition="absolute"
        noOfOptions5SelectedOptBackgroundColor="rgba(25, 136, 250, 0.7)"
        noOfOptions5SelectedOptTop={738}
        noOfOptions5SelectedOptLeft={0}
        noOfOptions5SelectedOptBorderRadius={5}
        selectedLeft={75}
        homeColor="#000"
        inboxColor="#0057b8"
        alertsColor="#000"
        profileColor="#000"
        settingsColor="#000"
        onBottomNavigationPress={() => navigation.navigate("HomePage")}
      />
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
  inbox: {
    backgroundColor: Color.colorsWhite,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Inbox;
