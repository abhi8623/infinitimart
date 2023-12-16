import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import IconleftActivefalse from "../components/IconleftActivefalse";
import ButtonPrimary from "../components/ButtonPrimary";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const AuthSignIn = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.authSignIn}>
      <Image
        style={styles.image10Icon}
        resizeMode="cover"
        source={require("../assets/image-10.png")}
      />
      <IconleftActivefalse
        inputTextValue={require("../assets/icon--mail1.png")}
        textInputValue="Mobile"
        showIconSearch
        iconleftActivefalsePosition="absolute"
        iconleftActivefalseBorderRadius={20}
        iconleftActivefalseWidth="unset"
        iconleftActivefalseHeight={50}
        iconleftActivefalseMarginTop="unset"
        iconleftActivefalseTop={335}
        iconleftActivefalseLeft={24}
        iconleftActivefalseRight={25}
      />
      <IconleftActivefalse
        inputTextValue={require("../assets/icon--lock1.png")}
        textInputValue="OTP"
        showIconSearch
        iconleftActivefalsePosition="absolute"
        iconleftActivefalseBorderRadius={20}
        iconleftActivefalseWidth="unset"
        iconleftActivefalseHeight={50}
        iconleftActivefalseMarginTop="unset"
        iconleftActivefalseTop={405}
        iconleftActivefalseLeft={24}
        iconleftActivefalseRight={25}
      />
      <View style={styles.buttonPrimaryParent}>
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
          onPress={() => navigation.navigate("AuthSignUp")}
        >
          <Text style={styles.textTypo}>
            <Text style={styles.dontHaveAny}>{`Don’t have any account? `}</Text>
            <Text style={styles.registerHere}>
              <Text style={styles.verifyTypo}>Register</Text>
              <Text style={styles.text1}>{` `}</Text>
              <Text style={styles.verifyTypo}>here</Text>
            </Text>
          </Text>
        </Pressable>
      </View>
      <View
        style={[
          styles.anInfinityBusinessVentureCWrapper,
          styles.oneMarketplaceEndlessPosition,
        ]}
      >
        <Text style={styles.textTypo}>
          <Text style={styles.an}>
            <Text style={styles.text1}>An</Text>
          </Text>
          <Text style={styles.verifyTypo}>
            <Text style={styles.an}>{` `}</Text>
            <Text style={styles.infinityBusinessVenture1}>
              Infinity Business Venture
            </Text>
          </Text>
          <Text style={styles.dontHaveAny}> Company</Text>
        </Text>
      </View>
      <View style={[styles.authSignInChild, styles.verifyPosition]} />
      <View style={styles.groupParent}>
        <View style={[styles.buttonPrimaryWrapper, styles.buttonLayout]}>
          <ButtonPrimary
            buttonText="Email"
            buttonPrimaryPosition="absolute"
            buttonPrimaryBorderRadius={20}
            buttonPrimaryBackgroundColor="#15ab3c"
            buttonPrimaryTop="50%"
            buttonPrimaryLeft="50%"
            buttonPrimaryWidth={164}
            buttonPrimaryMarginTop={-25}
            buttonPrimaryMarginLeft={-82}
            onButtonPrimaryPress={() => navigation.navigate("AuthSignIn1")}
          />
        </View>
        <View style={[styles.buttonPrimaryContainer, styles.buttonLayout]}>
          <ButtonPrimary
            buttonText="Mobile "
            buttonPrimaryPosition="absolute"
            buttonPrimaryBorderRadius={20}
            buttonPrimaryBackgroundColor="#15ab3c"
            buttonPrimaryTop="50%"
            buttonPrimaryLeft="50%"
            buttonPrimaryWidth={164}
            buttonPrimaryMarginTop={-25}
            buttonPrimaryMarginLeft={-82}
          />
        </View>
      </View>
      <View style={[styles.logoImTransperant1Wrapper, styles.logoLayout]}>
        <Image
          style={[styles.logoImTransperant1, styles.logoLayout]}
          resizeMode="cover"
          source={require("../assets/logo-im-transperant-1.png")}
        />
      </View>
      <View style={styles.authSignInItem} />
      <Text
        style={[
          styles.oneMarketplaceEndless,
          styles.oneMarketplaceEndlessPosition,
        ]}
      >{`One Marketplace, Endless Possibilities `}</Text>
      <View style={styles.authSignInInner} />
      <Text style={[styles.verify, styles.verifyPosition]}> Verify</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  oneMarketplaceEndlessPosition: {
    left: "50%",
    position: "absolute",
  },
  verifyPosition: {
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  buttonLayout: {
    width: 164,
    height: 50,
  },
  logoLayout: {
    width: 267,
    height: 50,
    position: "absolute",
  },
  image10Icon: {
    top: -92,
    width: 422,
    height: 943,
    left: 0,
    position: "absolute",
  },
  dontHaveAny: {
    color: Color.colorsWhite,
    fontFamily: FontFamily.dMSansRegular,
  },
  verifyTypo: {
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
  },
  text1: {
    fontFamily: FontFamily.dMSansRegular,
  },
  registerHere: {
    textDecoration: "underline",
    color: Color.colorGoldenrod,
  },
  textTypo: {
    textAlign: "center",
    lineHeight: 20,
    letterSpacing: 0,
    fontSize: FontSize.bodyBody14_size,
  },
  dontHaveAnyContainer: {
    marginTop: 24,
  },
  buttonPrimaryParent: {
    top: 487,
    left: 24,
    alignItems: "center",
    position: "absolute",
  },
  an: {
    color: Color.colorsWhite,
  },
  infinityBusinessVenture1: {
    color: Color.colorGoldenrod,
  },
  anInfinityBusinessVentureCWrapper: {
    marginLeft: -131.5,
    top: 763,
    alignItems: "center",
  },
  authSignInChild: {
    marginTop: -155,
    marginLeft: -163.5,
    width: 82,
    justifyContent: "center",
  },
  buttonPrimaryWrapper: {
    height: 50,
  },
  buttonPrimaryContainer: {
    marginLeft: 4,
    height: 50,
  },
  groupParent: {
    top: 251,
    left: 22,
    flexDirection: "row",
    position: "absolute",
  },
  logoImTransperant1: {
    top: 0,
    left: 0,
  },
  logoImTransperant1Wrapper: {
    top: 105,
    left: 54,
  },
  authSignInItem: {
    top: 233,
    left: 11,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    borderColor: Color.colorsWhite,
    borderWidth: 1,
    width: 353,
    height: 367,
    position: "absolute",
  },
  oneMarketplaceEndless: {
    marginLeft: -155.5,
    top: 155,
    width: 311,
    height: 31,
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    color: Color.colorsWhite,
    textAlign: "center",
    lineHeight: 20,
    letterSpacing: 0,
    fontSize: FontSize.bodyBody14_size,
  },
  authSignInInner: {
    top: 335,
    left: 243,
    borderTopLeftRadius: Border.br_11xs,
    borderTopRightRadius: Border.br_xl,
    borderBottomRightRadius: Border.br_xl,
    backgroundColor: Color.colorDodgerblue,
    width: 107,
    height: 50,
    position: "absolute",
  },
  verify: {
    marginTop: -57,
    marginLeft: 73.5,
    textAlign: "left",
    width: 74,
    height: 24,
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    color: Color.colorsWhite,
    lineHeight: 20,
    letterSpacing: 0,
    fontSize: FontSize.bodyBody14_size,
    top: "50%",
  },
  authSignIn: {
    backgroundColor: Color.colorsWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default AuthSignIn;
