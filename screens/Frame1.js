import * as React from "react";
import { View, StyleSheet, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Frame1 = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.rectangleParent, styles.frameChildLayout]}>
      <View style={[styles.frameChild, styles.frameChildLayout]} />
      <Pressable
        style={styles.image11}
        onPress={() => navigation.navigate("AuthSignUp")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/image-11.png")}
        />
      </Pressable>
      <Pressable
        style={styles.otpVerificationSuccessfulContainer}
        onPress={() => navigation.navigate("AuthSignUp")}
      >
        <Text style={styles.otpVerificationSuccessful}>
          OTP Verification Successful
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  frameChildLayout: {
    height: 192,
    width: 300,
  },
  frameChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_35xl,
    backgroundColor: Color.colorGray,
    position: "absolute",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  image11: {
    left: 111,
    top: 71,
    width: 79,
    height: 79,
    position: "absolute",
  },
  otpVerificationSuccessful: {
    marginLeft: -104,
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: FontFamily.dMSansBold,
    color: Color.colorMediumblue,
    textAlign: "left",
    width: 229,
    height: 50,
  },
  otpVerificationSuccessfulContainer: {
    left: "50%",
    top: 37,
    position: "absolute",
  },
  rectangleParent: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default Frame1;
