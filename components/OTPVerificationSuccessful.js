import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const OTPVerificationSuccessful = () => {
  return (
    <Text style={styles.otpVerificationSuccessful}>
      OTP Verification Successful
    </Text>
  );
};

const styles = StyleSheet.create({
  otpVerificationSuccessful: {
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
});

export default OTPVerificationSuccessful;
