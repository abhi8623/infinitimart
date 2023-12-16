import React, { useState, useCallback } from "react";
import { Image, StyleSheet, Text, View, Modal, Pressable } from "react-native";
import Frame4 from "./Frame4";
import { useNavigation } from "@react-navigation/native";
import SignInContainer from "../components/SignInContainer";
import Property1Default from "../components/Property1Default";
import Property1OnClick1 from "../components/Property1OnClick1";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const AuthSignIn1 = () => {
  const [frameContainer1Visible, setFrameContainer1Visible] = useState(false);
  const navigation = useNavigation();

  const openFrameContainer1 = useCallback(() => {
    setFrameContainer1Visible(true);
  }, []);

  const closeFrameContainer1 = useCallback(() => {
    setFrameContainer1Visible(false);
  }, []);

  return (
    <>
      <View style={styles.signIn1}>
        <Image
          style={[styles.image10Icon, styles.image10IconPosition]}
          resizeMode="cover"
          source={require("../assets/image-10.png")}
        />
        <SignInContainer
          inputTextValue={require("../assets/icon--mail2.png")}
          forgotPassword="Forgot Password"
          onFramePressablePress={openFrameContainer1}
          onDontHaveAnyContainerPress={() => navigation.navigate("AuthSignUp")}
          showIconSearch
        />
        <Property1Default
          keyField="Password"
          startCursor={require("../assets/end-cursor.png")}
          valueMasked={require("../assets/value-masked71.png")}
          property1DefaultPosition="absolute"
          property1DefaultTop={407}
          property1DefaultLeft={61}
          property1DefaultBorderRadius={20}
          property1DefaultBackgroundColor="#fff"
          property1DefaultBorderStyle="solid"
          property1DefaultBorderColor="#fff"
          property1DefaultBorderWidth={1}
          property1DefaultWidth={288}
          property1DefaultHeight={48}
          boxBorderRadius={35}
          boxBorderColor="#fff"
          keyFieldFontSize={14}
          keyFieldColor="#7f7f7f"
          keyFieldFontFamily="Montserrat-Regular"
          valueMaskedIconWidth={104}
        />
        <View
          style={[
            styles.anInfinityBusinessVenturesWrapper,
            styles.oneMarketplaceEndlessPosition,
          ]}
        >
          <Text style={styles.oneMarketplaceEndlessTypo1}>
            <Text style={styles.an}>
              <Text style={styles.an1}>An</Text>
            </Text>
            <Text style={styles.oneMarketplaceEndlessTypo}>
              <Text style={styles.an}>{` `}</Text>
              <Text style={styles.infinityBusinessVentures1}>
                Infinity Business Ventures
              </Text>
            </Text>
            <Text style={styles.company}> Company</Text>
          </Text>
        </View>
        <View style={[styles.logoImTransperant1Wrapper, styles.logoLayout]}>
          <Image
            style={[styles.logoImTransperant1, styles.logoLayout]}
            resizeMode="cover"
            source={require("../assets/logo-im-transperant-1.png")}
          />
        </View>
        <View style={styles.signIn1Child} />
        <Text
          style={[
            styles.oneMarketplaceEndless,
            styles.oneMarketplaceEndlessTypo,
          ]}
        >{`One Marketplace, Endless Possibilities `}</Text>
        <Property1OnClick1
          email="Email"
          property1OnClickPosition="absolute"
          property1OnClickBackgroundColor="#1988fa"
          property1OnClickTop={246}
          property1OnClickLeft={21}
          property1OnClickWidth={163}
          property1OnClickHeight={50}
          emailColor="#f3f3f3"
        />
        <Property1OnClick1
          email="Mobile"
          property1OnClickPosition="absolute"
          property1OnClickBackgroundColor="#1988fa"
          property1OnClickTop={246}
          property1OnClickLeft={193}
          property1OnClickWidth={163}
          property1OnClickHeight={50}
          emailColor="#f3f3f3"
        />
        <Property1Default
          keyField="Email"
          startCursor={require("../assets/end-cursor.png")}
          valueMasked={require("../assets/value-masked41.png")}
          property1DefaultPosition="absolute"
          property1DefaultTop={332}
          property1DefaultLeft={61}
          property1DefaultBorderRadius={20}
          property1DefaultBackgroundColor="#fff"
          property1DefaultBorderStyle="solid"
          property1DefaultBorderColor="#fff"
          property1DefaultBorderWidth={1}
          property1DefaultWidth={288}
          property1DefaultHeight={48}
          boxBorderRadius={35}
          boxBorderColor="#fff"
          keyFieldFontSize={14}
          keyFieldColor="#7f7f7f"
          keyFieldFontFamily="Montserrat-Regular"
          valueMaskedIconWidth={133}
        />
      </View>

      <Modal animationType="fade" transparent visible={frameContainer1Visible}>
        <View style={styles.frameContainer1Overlay}>
          <Pressable
            style={styles.frameContainer1Bg}
            onPress={closeFrameContainer1}
          />
          <Frame4 onClose={closeFrameContainer1} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  image10IconPosition: {
    left: 0,
    top: 0,
  },
  oneMarketplaceEndlessPosition: {
    left: "50%",
    position: "absolute",
  },
  logoLayout: {
    height: 50,
    width: 267,
    position: "absolute",
  },
  oneMarketplaceEndlessTypo: {
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
  },
  frameContainer1Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  frameContainer1Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  image10Icon: {
    width: 422,
    height: 943,
    position: "absolute",
  },
  an1: {
    fontFamily: FontFamily.dMSansRegular,
  },
  an: {
    color: Color.colorsWhite,
  },
  infinityBusinessVentures1: {
    color: Color.colorGoldenrod,
  },
  company: {
    fontFamily: FontFamily.dMSansRegular,
    color: Color.colorsWhite,
  },
  oneMarketplaceEndlessTypo1: {
    textAlign: "center",
    lineHeight: 20,
    letterSpacing: 0,
    fontSize: FontSize.bodyBody14_size,
  },
  anInfinityBusinessVenturesWrapper: {
    marginLeft: -135,
    top: 763,
    alignItems: "center",
  },
  logoImTransperant1: {
    left: 0,
    top: 0,
  },
  logoImTransperant1Wrapper: {
    top: 105,
    left: 54,
  },
  signIn1Child: {
    top: 233,
    left: 11,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    borderColor: Color.colorsWhite,
    borderWidth: 1,
    width: 353,
    height: 408,
    position: "absolute",
  },
  oneMarketplaceEndless: {
    marginLeft: -155.5,
    top: 155,
    width: 311,
    height: 31,
    color: Color.colorsWhite,
    textAlign: "center",
    lineHeight: 20,
    letterSpacing: 0,
    fontSize: FontSize.bodyBody14_size,
    left: "50%",
    position: "absolute",
  },
  signIn1: {
    backgroundColor: Color.colorsWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default AuthSignIn1;
