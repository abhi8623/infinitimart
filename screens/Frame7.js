import React, { useState, useCallback } from "react";
import { Image, StyleSheet, Text, View, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TitlePage from "../components/TitlePage";
import SectionCardForm1 from "../components/SectionCardForm1";
import Frame6 from "../components/Frame6";
import { Padding, Color, FontSize, FontFamily } from "../GlobalStyles";

const Frame7 = () => {
  const navigation = useNavigation();
  const [logoutTextVisible, setLogoutTextVisible] = useState(false);

  const openLogoutText = useCallback(() => {
    setLogoutTextVisible(true);
  }, []);

  const closeLogoutText = useCallback(() => {
    setLogoutTextVisible(false);
  }, []);

  return (
    <>
      <View style={styles.editProfileParent}>
        <View style={styles.editProfile}>
          <TitlePage
            iconChevronLeft={require("../assets/icon--chevronleft1.png")}
            search="Profile"
            iconShoppingCart={require("../assets/icon--trash2.png")}
            titlePagePosition="absolute"
            titlePageTop={44}
            titlePageRight={1}
            titlePageLeft={0}
            iconShoppingCartOpacity={0}
            onTitlePagePress={() => navigation.navigate("HomePage")}
          />
          <SectionCardForm1
            imageDimensions={require("../assets/avatar41.png")}
            wrapperAvatarTop={129}
            wrapperAvatarLeft={24}
            avatarIconWidth={75}
            avatarIconHeight={75}
          />
          <View style={styles.frameParent}>
            <View style={styles.generalWrapper}>
              <Text style={styles.general}>General</Text>
            </View>
            <View style={[styles.editProfileWrapper, styles.wrapperSpaceBlock]}>
              <Text style={[styles.editProfile1, styles.logout1Typo]}>
                Edit Profile
              </Text>
            </View>
            <View style={[styles.walletWrapper, styles.wrapperSpaceBlock]}>
              <Text style={[styles.editProfile1, styles.logout1Typo]}>
                Wallet
              </Text>
            </View>
            <View style={[styles.legalWrapper, styles.wrapperSpaceBlock]}>
              <Text style={styles.general}>Legal</Text>
            </View>
            <View style={[styles.termsOfUseWrapper, styles.wrapperSpaceBlock]}>
              <Text style={[styles.editProfile1, styles.logout1Typo]}>
                Terms of Use
              </Text>
            </View>
            <View
              style={[styles.privacyPolicyWrapper, styles.wrapperSpaceBlock]}
            >
              <Text style={[styles.editProfile1, styles.logout1Typo]}>
                Privacy Policy
              </Text>
            </View>
            <View style={[styles.legalWrapper, styles.wrapperSpaceBlock]}>
              <Text style={styles.general}>Personal</Text>
            </View>
            <View style={[styles.reportABugWrapper, styles.wrapperSpaceBlock]}>
              <Text style={[styles.editProfile1, styles.logout1Typo]}>
                Report a Bug
              </Text>
            </View>
            <View style={[styles.logoutWrapper, styles.wrapperSpaceBlock]}>
              <Pressable onPress={openLogoutText}>
                <Text style={[styles.logout1, styles.logout1Typo]}>Logout</Text>
              </Pressable>
            </View>
          </View>
          <View style={styles.allRightsReservedToInfinWrapper}>
            <Text style={styles.allRightsReservedContainer}>
              <Text style={styles.allRightsReservedTo}>
                <Text style={styles.allRightsReserved}>
                  All Rights reserved to ©
                </Text>
              </Text>
              <Text style={styles.infinityBusinessVentures}>
                <Text style={styles.allRightsReservedTo}>{` `}</Text>
                <Text
                  style={styles.infinityBusinessVentures1}
                >{`Infinity Business Ventures `}</Text>
              </Text>
            </Text>
          </View>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={logoutTextVisible}>
        <View style={styles.logoutTextOverlay}>
          <Pressable style={styles.logoutTextBg} onPress={closeLogoutText} />
          <Frame6 onClose={closeLogoutText} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  wrapperSpaceBlock: {
    marginTop: 1,
    paddingHorizontal: Padding.p_5xl,
    flexDirection: "row",
    width: 375,
    backgroundColor: Color.colorsWhite,
  },
  logout1Typo: {
    fontSize: FontSize.size_base,
    color: Color.colorsDefault,
    textAlign: "left",
    fontFamily: FontFamily.dMSansRegular,
    letterSpacing: 0,
  },
  general: {
    fontSize: FontSize.bodyBody14_size,
    color: Color.colorsGreyDark1,
    textAlign: "left",
    fontFamily: FontFamily.dMSansRegular,
    letterSpacing: 0,
  },
  generalWrapper: {
    shadowColor: "rgba(0, 0, 0, 0.15)",
    paddingVertical: Padding.p_xl,
    paddingHorizontal: Padding.p_5xl,
    flexDirection: "row",
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: -1,
    },
    width: 375,
    backgroundColor: Color.colorsWhite,
  },
  editProfile1: {
    color: Color.colorsDefault,
  },
  editProfileWrapper: {
    paddingVertical: Padding.p_mini,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    marginTop: 1,
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: -1,
    },
  },
  walletWrapper: {
    paddingVertical: Padding.p_mini,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    marginTop: 1,
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: -1,
    },
  },
  legalWrapper: {
    paddingVertical: Padding.p_xl,
  },
  termsOfUseWrapper: {
    paddingVertical: Padding.p_mini,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    marginTop: 1,
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: -1,
    },
  },
  privacyPolicyWrapper: {
    paddingVertical: Padding.p_mini,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    marginTop: 1,
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: -1,
    },
  },
  reportABugWrapper: {
    paddingVertical: Padding.p_mini,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    marginTop: 1,
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: -1,
    },
  },
  logoutTextOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  logoutTextBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  logout1: {
    color: Color.colorsDefault,
  },
  logoutWrapper: {
    paddingVertical: Padding.p_mini,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    marginTop: 1,
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: -1,
    },
  },
  frameParent: {
    top: 239,
    left: 0,
    position: "absolute",
  },
  allRightsReserved: {
    fontFamily: FontFamily.dMSansRegular,
  },
  allRightsReservedTo: {
    color: Color.colorsDefault,
  },
  infinityBusinessVentures1: {
    color: Color.colorGoldenrod,
  },
  infinityBusinessVentures: {
    fontWeight: "700",
    fontFamily: FontFamily.dMSansBold,
  },
  allRightsReservedContainer: {
    fontSize: FontSize.size_xs,
    lineHeight: 20,
    textAlign: "center",
    letterSpacing: 0,
  },
  allRightsReservedToInfinWrapper: {
    marginLeft: -146.5,
    top: 774,
    left: "50%",
    alignItems: "center",
    position: "absolute",
  },
  editProfile: {
    top: 0,
    overflow: "hidden",
    width: 375,
    backgroundColor: Color.colorsWhite,
    left: 0,
    position: "absolute",
    height: 812,
  },
  editProfileParent: {
    flex: 1,
    width: "100%",
    height: 812,
  },
});

export default Frame7;
