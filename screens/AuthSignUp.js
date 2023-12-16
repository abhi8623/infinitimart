import React, { useState, useCallback } from "react";
import { Image, StyleSheet, Text, View, Pressable, Modal } from "react-native";
import Frame from "../components/Frame";
import IconleftActivefalse from "../components/IconleftActivefalse";
import ButtonPrimary from "../components/ButtonPrimary";
import { useNavigation } from "@react-navigation/native";
import Property1Default from "../components/Property1Default";
import Frame2 from "../components/Frame2";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const AuthSignUp = () => {
  const [buttonPrimaryVisible, setButtonPrimaryVisible] = useState(false);
  const navigation = useNavigation();
  const [groupContainer2Visible, setGroupContainer2Visible] = useState(false);

  const openButtonPrimary = useCallback(() => {
    setButtonPrimaryVisible(true);
  }, []);

  const closeButtonPrimary = useCallback(() => {
    setButtonPrimaryVisible(false);
  }, []);

  const openGroupContainer2 = useCallback(() => {
    setGroupContainer2Visible(true);
  }, []);

  const closeGroupContainer2 = useCallback(() => {
    setGroupContainer2Visible(false);
  }, []);

  return (
    <>
      <View style={styles.register}>
        <Image
          style={styles.image10Icon}
          resizeMode="cover"
          source={require("../assets/image-1011.png")}
        />
        <IconleftActivefalse
          inputTextValue={require("../assets/icon--mail1.png")}
          textInputValue="Address"
          showIconSearch={false}
          iconleftActivefalsePosition="absolute"
          iconleftActivefalseBorderRadius={20}
          iconleftActivefalseWidth="unset"
          iconleftActivefalseHeight={114}
          iconleftActivefalseMarginTop="unset"
          iconleftActivefalseTop={568}
          iconleftActivefalseLeft={24}
          iconleftActivefalseRight={25}
        />
        <IconleftActivefalse
          inputTextValue={require("../assets/icon--mail1.png")}
          textInputValue="Name"
          showIconSearch={false}
          iconleftActivefalsePosition="absolute"
          iconleftActivefalseBorderRadius={20}
          iconleftActivefalseWidth={326}
          iconleftActivefalseHeight={50}
          iconleftActivefalseMarginTop="unset"
          iconleftActivefalseTop={144}
          iconleftActivefalseLeft={24}
          iconleftActivefalseRight="unset"
        />
        <IconleftActivefalse
          inputTextValue={require("../assets/icon--lock1.png")}
          textInputValue="Email"
          showIconSearch={false}
          iconleftActivefalsePosition="absolute"
          iconleftActivefalseBorderRadius={20}
          iconleftActivefalseWidth={326}
          iconleftActivefalseHeight={50}
          iconleftActivefalseMarginTop="unset"
          iconleftActivefalseTop={214}
          iconleftActivefalseLeft={24}
          iconleftActivefalseRight="unset"
        />
        <IconleftActivefalse
          inputTextValue={require("../assets/icon--lock1.png")}
          textInputValue="Business Name"
          showIconSearch={false}
          iconleftActivefalsePosition="absolute"
          iconleftActivefalseBorderRadius={20}
          iconleftActivefalseWidth={326}
          iconleftActivefalseHeight={50}
          iconleftActivefalseMarginTop="unset"
          iconleftActivefalseTop={496}
          iconleftActivefalseLeft={24}
          iconleftActivefalseRight="unset"
        />
        <IconleftActivefalse
          inputTextValue={require("../assets/icon--lock1.png")}
          textInputValue="Password"
          showIconSearch={false}
          iconleftActivefalsePosition="absolute"
          iconleftActivefalseBorderRadius={20}
          iconleftActivefalseWidth="unset"
          iconleftActivefalseHeight={50}
          iconleftActivefalseMarginTop="unset"
          iconleftActivefalseTop={356}
          iconleftActivefalseLeft={24}
          iconleftActivefalseRight={25}
        />
        <ButtonPrimary
          buttonText="Register"
          buttonPrimaryPosition="absolute"
          buttonPrimaryBorderRadius={10}
          buttonPrimaryBackgroundColor="#15ab3c"
          buttonPrimaryTop={723}
          buttonPrimaryLeft={24}
          buttonPrimaryWidth={326}
          buttonPrimaryMarginTop="unset"
          buttonPrimaryMarginLeft="unset"
          onButtonPrimaryPress={openButtonPrimary}
        />
        <View
          style={[styles.ifYouHaveAnAccountSignIWrapper, styles.verifyPosition]}
        >
          <Pressable onPress={() => navigation.navigate("AuthSignIn1")}>
            <Text style={[styles.text, styles.textLayout]}>
              <Text style={styles.ifYouHave}>{`If you have an account? `}</Text>
              <Text style={[styles.signInHere, styles.verifyTypo]}>
                Sign In here
              </Text>
            </Text>
          </Pressable>
        </View>
        <View
          style={[styles.logoImTransperant1Wrapper, styles.groupChildLayout]}
        >
          <Image
            style={styles.logoImTransperant1}
            resizeMode="cover"
            source={require("../assets/logo-im-transperant-1.png")}
          />
        </View>
        <Property1Default
          keyField="Name"
          startCursor={require("../assets/end-cursor.png")}
          valueMasked={require("../assets/value-masked6.png")}
          property1DefaultPosition="absolute"
          property1DefaultTop={145}
          property1DefaultLeft={25}
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
          keyFieldColor="rgba(127, 127, 127, 0.6)"
          keyFieldFontFamily="DMSans-Regular"
          valueMaskedIconWidth={52}
        />
        <Property1Default
          keyField="Business Name"
          startCursor={require("../assets/end-cursor.png")}
          valueMasked={require("../assets/value-masked11.png")}
          property1DefaultPosition="absolute"
          property1DefaultTop={497}
          property1DefaultLeft={26}
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
          keyFieldColor="rgba(127, 127, 127, 0.6)"
          keyFieldFontFamily="DMSans-Regular"
          valueMaskedIconWidth={235}
        />
        <Property1Default
          keyField="Address"
          startCursor={require("../assets/end-cursor.png")}
          valueMasked={require("../assets/value-masked21.png")}
          property1DefaultPosition="absolute"
          property1DefaultTop={601}
          property1DefaultLeft={26}
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
          keyFieldColor="rgba(127, 127, 127, 0.6)"
          keyFieldFontFamily="DMSans-Regular"
          valueMaskedIconWidth={206}
        />
        <Property1Default
          keyField="Password"
          startCursor={require("../assets/end-cursor.png")}
          valueMasked={require("../assets/value-masked31.png")}
          property1DefaultPosition="absolute"
          property1DefaultTop={357}
          property1DefaultLeft={26}
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
          keyFieldColor="rgba(127, 127, 127, 0.6)"
          keyFieldFontFamily="DMSans-Regular"
          valueMaskedIconWidth={91}
        />
        <View style={[styles.inputFieldsParent, styles.inputPosition]}>
          <Property1Default
            keyField="Email"
            startCursor={require("../assets/end-cursor.png")}
            valueMasked={require("../assets/value-masked41.png")}
            property1DefaultPosition="absolute"
            property1DefaultTop={1}
            property1DefaultLeft={0}
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
            keyFieldColor="rgba(127, 127, 127, 0.6)"
            keyFieldFontFamily="DMSans-Regular"
            valueMaskedIconWidth={133}
          />
          <View style={[styles.groupChild, styles.groupPosition]} />
          <Text style={[styles.verify, styles.verifyTypo]}> Verify</Text>
        </View>
        <Pressable
          style={[styles.inputFieldsGroup, styles.groupLayout]}
          onPress={openGroupContainer2}
        >
          <Property1Default
            keyField="Mobile"
            startCursor={require("../assets/end-cursor.png")}
            valueMasked={require("../assets/value-masked5.png")}
            property1DefaultPosition="absolute"
            property1DefaultTop={0}
            property1DefaultLeft={0}
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
            keyFieldColor="rgba(127, 127, 127, 0.6)"
            keyFieldFontFamily="DMSans-Regular"
            valueMaskedIconWidth={100}
          />
          <View style={[styles.groupItem, styles.groupLayout]} />
          <Text style={[styles.verify, styles.verifyTypo]}> Verify</Text>
        </Pressable>
        <View style={[styles.inputFieldsContainer, styles.groupLayout]}>
          <Property1Default
            keyField="GST"
            startCursor={require("../assets/end-cursor.png")}
            valueMasked={require("../assets/value-masked61.png")}
            property1DefaultPosition="absolute"
            property1DefaultTop={0}
            property1DefaultLeft={0}
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
            keyFieldColor="rgba(127, 127, 127, 0.6)"
            keyFieldFontFamily="DMSans-Regular"
            valueMaskedIconWidth={94}
          />
          <View style={[styles.groupItem, styles.groupLayout]} />
          <Text style={[styles.verify, styles.verifyTypo]}> Verify</Text>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={buttonPrimaryVisible}>
        <View style={styles.buttonPrimaryOverlay}>
          <Pressable
            style={styles.buttonPrimaryBg}
            onPress={closeButtonPrimary}
          />
          <Frame onClose={closeButtonPrimary} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={groupContainer2Visible}>
        <View style={styles.groupContainer2Overlay}>
          <Pressable
            style={styles.groupContainer2Bg}
            onPress={closeGroupContainer2}
          />
          <Frame2 onClose={closeGroupContainer2} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  verifyPosition: {
    left: "50%",
    position: "absolute",
  },
  textLayout: {
    lineHeight: 20,
    letterSpacing: 0,
    fontSize: FontSize.bodyBody14_size,
  },
  verifyTypo: {
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
  },
  groupChildLayout: {
    height: 50,
    position: "absolute",
  },
  inputPosition: {
    left: 24,
    width: 326,
  },
  groupPosition: {
    width: 107,
    backgroundColor: Color.colorDodgerblue,
    borderBottomRightRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    borderTopLeftRadius: Border.br_11xs,
    left: 219,
    top: 0,
  },
  groupLayout: {
    height: 48,
    position: "absolute",
  },
  buttonPrimaryOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  buttonPrimaryBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  image10Icon: {
    top: 5,
    width: 422,
    height: 943,
    left: 0,
    position: "absolute",
  },
  ifYouHave: {
    fontFamily: FontFamily.dMSansRegular,
    color: Color.colorsWhite,
  },
  signInHere: {
    textDecoration: "underline",
    color: Color.colorsPrimary,
  },
  text: {
    textAlign: "center",
  },
  ifYouHaveAnAccountSignIWrapper: {
    marginLeft: -121.5,
    top: 84,
    alignItems: "center",
  },
  logoImTransperant1: {
    top: 0,
    height: 50,
    width: 267,
    left: 0,
    position: "absolute",
  },
  logoImTransperant1Wrapper: {
    top: 34,
    left: 54,
    width: 267,
    height: 50,
  },
  groupChild: {
    height: 50,
    position: "absolute",
  },
  verify: {
    marginTop: -11,
    marginLeft: 74,
    top: "50%",
    textAlign: "left",
    width: 74,
    height: 24,
    color: Color.colorsWhite,
    lineHeight: 20,
    letterSpacing: 0,
    fontSize: FontSize.bodyBody14_size,
    left: "50%",
    position: "absolute",
  },
  inputFieldsParent: {
    top: 214,
    width: 326,
    height: 50,
    position: "absolute",
  },
  groupContainer2Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  groupContainer2Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  groupItem: {
    width: 107,
    backgroundColor: Color.colorDodgerblue,
    borderBottomRightRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    borderTopLeftRadius: Border.br_11xs,
    left: 219,
    top: 0,
  },
  inputFieldsGroup: {
    top: 285,
    width: 326,
    left: 24,
  },
  inputFieldsContainer: {
    top: 426,
    left: 25,
    width: 326,
  },
  register: {
    backgroundColor: Color.colorsWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default AuthSignUp;
