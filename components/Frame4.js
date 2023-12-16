import * as React from "react";
import { View, StyleSheet, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Property1DefaultIcon from "./Property1DefaultIcon";
import { Border, Color } from "../GlobalStyles";

const Frame4 = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.rectangleParent, styles.frameChildLayout]}>
      <View style={[styles.frameChild, styles.frameChildLayout]} />
      <Pressable
        style={styles.loader1Parent}
        onPress={() => navigation.navigate("HomePage")}
      >
        <Property1DefaultIcon
          property1DefaultIconPrope={require("../assets/loader-1.png")}
          property1DefaultIconWidth={104}
          property1DefaultIconHeight={26}
          property1DefaultIconMarginLeft="unset"
        />
        <Property1DefaultIcon
          property1DefaultIconPrope={require("../assets/loader-2.png")}
          property1DefaultIconWidth={104}
          property1DefaultIconHeight={26}
          property1DefaultIconMarginLeft={14}
        />
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
    backgroundColor: Color.colorGray_100,
    position: "absolute",
  },
  loader1Parent: {
    top: 83,
    left: 72,
    flexDirection: "row",
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

export default Frame4;
