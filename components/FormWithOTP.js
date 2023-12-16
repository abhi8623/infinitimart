import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const FormWithOTP = () => {
  return (
    <View style={[styles.inputFields, styles.boxBorder]}>
      <Text style={[styles.errorMessage, styles.keyFieldTypo]}>Name</Text>
      <View style={[styles.box, styles.boxBorder]} />
      <Text style={[styles.keyField, styles.keyFieldTypo]}>OTP</Text>
      <Image
        style={styles.valueMainIcon}
        resizeMode="cover"
        source={require("../assets/value-main.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  boxBorder: {
    borderWidth: 1,
    borderColor: Color.colorsWhite,
    borderStyle: "solid",
    backgroundColor: Color.colorsWhite,
    position: "absolute",
  },
  keyFieldTypo: {
    opacity: 0.8,
    textAlign: "left",
    fontFamily: FontFamily.montserratRegular,
    position: "absolute",
  },
  errorMessage: {
    top: "38.33%",
    left: 0,
    fontSize: FontSize.size_xs,
    color: Color.colorRed,
  },
  box: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_16xl,
  },
  keyField: {
    top: "33.33%",
    left: 16,
    fontSize: FontSize.bodyBody14_size,
    color: Color.colorsGreyDark1,
  },
  valueMainIcon: {
    top: 26,
    left: 17,
    width: 26,
    height: 28,
    position: "absolute",
  },
  inputFields: {
    top: 407,
    left: 61,
    borderRadius: Border.br_xl,
    width: 288,
    height: 48,
  },
});

export default FormWithOTP;
