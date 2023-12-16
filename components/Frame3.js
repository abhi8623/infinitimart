import React, { useState, useCallback } from "react";
import { StyleSheet, View, Pressable, Text, Modal } from "react-native";
import Frame1 from "../screens/Frame1";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const Frame3 = () => {
  const [rectangleVisible, setRectangleVisible] = useState(false);

  const openRectangle = useCallback(() => {
    setRectangleVisible(true);
  }, []);

  const closeRectangle = useCallback(() => {
    setRectangleVisible(false);
  }, []);

  return (
    <>
      <View style={styles.rectangleParent}>
        <Pressable style={styles.frameChild} onPress={openRectangle} />
        <Text style={styles.enterOtp}>Enter OTP</Text>
        <Text style={[styles.otpSuccessfullySent, styles.otpTypo]}>
          OTP Successfully sent
        </Text>
        <Text style={[styles.reSendOtpInContainer, styles.otpTypo1]}>
          <Text style={styles.reSend}>Re-send</Text>
          <Text style={styles.otpTypo}> OTP in 00:30 secs</Text>
        </Text>
        <View style={styles.rectangleGroup}>
          <View style={[styles.groupChild, styles.groupLayout]} />
          <View style={[styles.groupItem, styles.groupLayout]} />
          <View style={[styles.groupInner, styles.groupLayout]} />
          <View style={[styles.rectangleView, styles.groupLayout]} />
          <Text style={[styles.text, styles.textLayout]}>*</Text>
          <Text style={[styles.text1, styles.textLayout]}>*</Text>
          <Text style={[styles.text2, styles.textLayout]}>*</Text>
          <Text style={[styles.text3, styles.textLayout]}>*</Text>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={rectangleVisible}>
        <View style={styles.rectangleOverlay}>
          <Pressable style={styles.rectangleBg} onPress={closeRectangle} />
          <Frame1 onClose={closeRectangle} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  otpTypo: {
    fontFamily: FontFamily.dMSansRegular,
    color: Color.colorsDefault,
  },
  otpTypo1: {
    fontSize: FontSize.bodyBody14_size,
    height: 50,
    textAlign: "left",
    lineHeight: 20,
    letterSpacing: 0,
    left: "50%",
    position: "absolute",
  },
  groupLayout: {
    height: 64,
    width: 44,
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_xl,
    top: 0,
    position: "absolute",
  },
  textLayout: {
    height: 52,
    width: 34,
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_45xl,
    top: 32,
    textAlign: "left",
    color: Color.colorsDefault,
    lineHeight: 20,
    letterSpacing: 0,
    position: "absolute",
  },
  rectangleOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  rectangleBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  frameChild: {
    top: 27,
    left: 45,
    borderRadius: Border.br_35xl,
    backgroundColor: Color.colorGray,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 300,
    height: 192,
    position: "absolute",
  },
  enterOtp: {
    marginLeft: -51,
    top: 45,
    fontSize: FontSize.size_xl,
    width: 102,
    height: 50,
    textAlign: "left",
    color: Color.colorsDefault,
    lineHeight: 20,
    letterSpacing: 0,
    left: "50%",
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  otpSuccessfullySent: {
    marginLeft: -77,
    top: 67,
    width: 168,
    fontSize: FontSize.bodyBody14_size,
    height: 50,
    textAlign: "left",
    lineHeight: 20,
    letterSpacing: 0,
    left: "50%",
    position: "absolute",
  },
  reSend: {
    color: Color.colorMediumblue,
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
  },
  reSendOtpInContainer: {
    marginLeft: -91,
    top: 172,
    width: 216,
  },
  groupChild: {
    left: 0,
  },
  groupItem: {
    left: 124,
  },
  groupInner: {
    left: 62,
  },
  rectangleView: {
    left: 186,
  },
  text: {
    left: 10,
  },
  text1: {
    left: 134,
  },
  text2: {
    left: 72,
  },
  text3: {
    left: 196,
  },
  rectangleGroup: {
    top: 95,
    left: 79,
    width: 230,
    height: 84,
    position: "absolute",
  },
  rectangleParent: {
    width: 400,
    height: 236,
  },
});

export default Frame3;
