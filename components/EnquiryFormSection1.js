import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import BalanceSection2 from "./BalanceSection2";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const EnquiryFormSection1 = () => {
  return (
    <View style={styles.frameParent}>
      <BalanceSection2
        balance="Enquirys"
        prop="210"
        referral="Views"
        prop1="912"
        propTop={40}
      />
      <Text style={[styles.overview, styles.filtersTypo]}>Overview</Text>
      <Text style={[styles.filters, styles.filtersTypo]}>Filters</Text>
      <Image
        style={styles.image12Icon}
        resizeMode="cover"
        source={require("../assets/image-12.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  filtersTypo: {
    height: 29,
    width: 114,
    textAlign: "left",
    color: Color.colorsDefault,
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    lineHeight: 20,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  overview: {
    top: 3,
    left: 2,
  },
  filters: {
    top: 2,
    left: 254,
  },
  image12Icon: {
    top: 0,
    left: 311,
    width: 19,
    height: 19,
    position: "absolute",
  },
  frameParent: {
    top: 560,
    left: 13,
    width: 368,
    height: 114,
    position: "absolute",
  },
});

export default EnquiryFormSection1;
