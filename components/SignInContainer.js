import * as React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import IconleftActivefalse from "./IconleftActivefalse";
import ButtonPrimary from "./ButtonPrimary";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const SignInContainer = ({
  inputTextValue,
  forgotPassword,
  onFramePressablePress,
  onDontHaveAnyContainerPress,
  showIconSearch,
}) => {
  return (
    <View style={styles.frameParent}>
      <View style={styles.groupParent}>
        <View style={styles.inputTextWrapper}>
          <IconleftActivefalse
            inputTextValue={require("../assets/icon--mail2.png")}
            textInputValue="Email"
            showIconSearch
            iconleftActivefalsePosition="absolute"
            iconleftActivefalseBorderRadius={20}
            iconleftActivefalseWidth="unset"
            iconleftActivefalseHeight={55}
            iconleftActivefalseMarginTop="unset"
            iconleftActivefalseTop={0}
            iconleftActivefalseLeft={0}
            iconleftActivefalseRight={0}
          />
        </View>
        <IconleftActivefalse
          inputTextValue={require("../assets/icon--lock2.png")}
          textInputValue="Password"
          showIconSearch
          iconleftActivefalsePosition="unset"
          iconleftActivefalseBorderRadius={20}
          iconleftActivefalseWidth={326}
          iconleftActivefalseHeight={55}
          iconleftActivefalseMarginTop={20}
          iconleftActivefalseTop="unset"
          iconleftActivefalseLeft="unset"
          iconleftActivefalseRight="unset"
        />
        <Text style={[styles.forgotPassword, styles.registerTypo]}>
          {forgotPassword}
        </Text>
      </View>
      <Pressable
        style={styles.buttonPrimaryParent}
        onPress={onFramePressablePress}
      >
        <ButtonPrimary
          buttonText="Sign In"
          buttonPrimaryPosition="unset"
          buttonPrimaryBorderRadius={20}
          buttonPrimaryBackgroundColor="#1586fa"
          buttonPrimaryTop="unset"
          buttonPrimaryLeft="unset"
          buttonPrimaryWidth={326}
          buttonPrimaryMarginTop="unset"
          buttonPrimaryMarginLeft="unset"
        />
        <Pressable
          style={styles.dontHaveAnyContainer}
          onPress={onDontHaveAnyContainerPress}
        >
          <Text style={[styles.text, styles.textLayout]}>
            <Text style={styles.dontHaveAny}>{`Don’t have any account? `}</Text>
            <Text style={styles.registerHere}>
              <Text style={styles.registerTypo}>Register</Text>
              <Text style={styles.text1}>{` `}</Text>
              <Text style={styles.registerTypo}>here</Text>
            </Text>
          </Text>
        </Pressable>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  registerTypo: {
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
  },
  textLayout: {
    lineHeight: 20,
    letterSpacing: 0,
    fontSize: FontSize.bodyBody14_size,
  },
  inputTextWrapper: {
    width: 326,
    height: 55,
  },
  forgotPassword: {
    textAlign: "right",
    marginTop: 20,
    color: Color.colorsWhite,
    lineHeight: 20,
    letterSpacing: 0,
    fontSize: FontSize.bodyBody14_size,
  },
  groupParent: {
    alignItems: "center",
  },
  dontHaveAny: {
    fontFamily: FontFamily.dMSansRegular,
    color: Color.colorsWhite,
  },
  text1: {
    fontFamily: FontFamily.dMSansRegular,
  },
  registerHere: {
    textDecoration: "underline",
    color: Color.colorGoldenrod,
  },
  text: {
    textAlign: "center",
  },
  dontHaveAnyContainer: {
    marginTop: 24,
  },
  buttonPrimaryParent: {
    marginTop: 32,
    alignItems: "center",
  },
  frameParent: {
    position: "absolute",
    top: 331,
    left: 24,
    alignItems: "center",
  },
});

export default SignInContainer;
