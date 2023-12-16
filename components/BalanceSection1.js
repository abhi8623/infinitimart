import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import BalanceSection2 from "./BalanceSection2";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const BalanceSection1 = () => {
  return (
    <View style={styles.frameParent}>
      <BalanceSection2
        balance="Balance"
        prop="₹2,359"
        referral="Referral "
        prop1="₹800"
        propTop={29}
      />
      <Text style={styles.wallet}>Wallet</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wallet: {
    top: 0,
    left: 0,
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: FontFamily.dMSansBold,
    color: Color.colorsDefault,
    textAlign: "left",
    width: 114,
    height: 29,
    position: "absolute",
  },
  frameParent: {
    top: 685,
    left: 14,
    width: 345,
    height: 103,
    position: "absolute",
  },
});

export default BalanceSection1;
