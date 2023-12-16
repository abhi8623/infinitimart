import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import SectionCardForm1 from "../components/SectionCardForm1";
import LeadsContainer1 from "../components/LeadsContainer1";
import Property1OnClick from "../components/Property1OnClick";
import BalanceSection1 from "../components/BalanceSection1";
import EnquiryFormSection1 from "../components/EnquiryFormSection1";
import { useNavigation } from "@react-navigation/native";
import NoOfOptions5SelectedOpt from "../components/NoOfOptions5SelectedOpt";
import { Border, Color } from "../GlobalStyles";

const HomePage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homePage}>
      <SectionCardForm1
        imageDimensions={require("../assets/avatar.png")}
        wrapperAvatarTop={69}
        wrapperAvatarLeft={9}
        avatarIconWidth={101}
        avatarIconHeight={99}
      />
      <LeadsContainer1 />
      <View style={styles.frameParent}>
        <View style={[styles.buttonWrapper, styles.buttonPosition]}>
          <Property1OnClick
            email="Edit Profile"
            property1OnClickPosition="unset"
          />
        </View>
        <View style={[styles.buttonContainer, styles.buttonPosition]}>
          <Property1OnClick
            email="Share Business"
            property1OnClickPosition="unset"
          />
        </View>
      </View>
      <View style={styles.image13Wrapper}>
        <Image
          style={styles.image13Icon}
          resizeMode="cover"
          source={require("../assets/image-13.png")}
        />
      </View>
      <BalanceSection1 />
      <EnquiryFormSection1 />
      <View style={styles.infinitimartLogo21Parent}>
        <Image
          style={styles.infinitimartLogo21}
          resizeMode="cover"
          source={require("../assets/infinitimart-logo-2-1.png")}
        />
        <View style={styles.notificationParent}>
          <Pressable
            style={styles.notification}
            onPress={() => navigation.navigate("Alerts1")}
          >
            <Image
              style={styles.icon}
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
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/chat.png")}
            />
          </Pressable>
        </View>
      </View>
      <NoOfOptions5SelectedOpt
        icons={require("../assets/icons5.png")}
        icons1={require("../assets/icons91.png")}
        icons2={require("../assets/icons101.png")}
        icons3={require("../assets/icons131.png")}
        icons4={require("../assets/icons121.png")}
        noOfOptions5SelectedOptPosition="absolute"
        noOfOptions5SelectedOptBackgroundColor="#5eacfc"
        noOfOptions5SelectedOptTop={738}
        noOfOptions5SelectedOptLeft={0}
        selectedLeft={0}
        homeColor="#0057b8"
        inboxColor="#000"
        alertsColor="#000"
        profileColor="#000"
        settingsColor="#000"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonPosition: {
    top: 0,
    flexDirection: "row",
    position: "absolute",
  },
  chatLayout: {
    marginLeft: 11,
    height: 24,
    width: 24,
  },
  buttonWrapper: {
    left: 0,
    flexDirection: "row",
  },
  buttonContainer: {
    left: 175,
    flexDirection: "row",
  },
  frameParent: {
    top: 191,
    left: 13,
    width: 338,
    height: 50,
    position: "absolute",
  },
  image13Icon: {
    top: -3,
    left: -7,
    width: 357,
    height: 159,
    position: "absolute",
  },
  image13Wrapper: {
    top: 397,
    left: 7,
    borderRadius: Border.br_xl,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: Color.colorsDefault,
    borderWidth: 1,
    width: 350,
    height: 152,
    overflow: "hidden",
    position: "absolute",
  },
  infinitimartLogo21: {
    width: 164,
    height: 34,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
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
    top: 11,
    left: 18,
    alignItems: "center",
    overflow: "hidden",
    flexDirection: "row",
    position: "absolute",
  },
  homePage: {
    backgroundColor: Color.colorsWhite,
    flex: 1,
    height: 812,
    width: "100%",
  },
});

export default HomePage;
