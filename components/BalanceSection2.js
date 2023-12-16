import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const BalanceSection2 = ({ balance, prop, referral, prop1, propTop }) => {
  const frameView1Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  return (
    <View style={[styles.frameParent, frameView1Style]}>
      <View style={styles.parentShadowBox}>
        <Text style={[styles.balance, styles.balanceTypo]}>{balance}</Text>
        <Text style={[styles.text, styles.textTypo]}>{prop}</Text>
      </View>
      <View style={[styles.referralParent, styles.parentShadowBox]}>
        <Text style={[styles.referral, styles.balanceTypo]}>{referral}</Text>
        <Text style={[styles.text1, styles.textTypo]}>{prop1}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  balanceTypo: {
    height: 29,
    width: 114,
    textAlign: "left",
    color: Color.colorsDefault,
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    lineHeight: 20,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    top: 8,
    position: "absolute",
  },
  textTypo: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorDodgerblue_100,
    lineHeight: 23,
    fontSize: FontSize.size_13xl,
    height: 29,
    width: 114,
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    letterSpacing: 0,
    position: "absolute",
  },
  parentShadowBox: {
    overflow: "hidden",
    height: 74,
    width: 165,
    borderWidth: 1,
    borderColor: Color.colorsDefault,
    borderStyle: "solid",
    borderRadius: Border.br_xl,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  balance: {
    left: 13,
  },
  text: {
    top: 37,
    left: 43,
  },
  referral: {
    left: 25,
  },
  text1: {
    top: 36,
    left: 49,
  },
  referralParent: {
    marginLeft: 15,
  },
  frameParent: {
    top: 29,
    left: 0,
    flexDirection: "row",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
});

export default BalanceSection2;
