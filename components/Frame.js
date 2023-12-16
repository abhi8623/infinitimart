import * as React from "react";
import { View, StyleSheet, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Frame = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.rectangleParent, styles.frameChildLayout]}
      onPress={() => navigation.navigate("AuthSignIn1")}
    >
      <View style={[styles.frameChild, styles.frameChildLayout]} />
      <Image
        style={styles.image11Icon}
        resizeMode="cover"
        source={require("../assets/image-11.png")}
      />
      <Text style={styles.registrationSuccessfulLogIn}>{`Registration Successful
Log-in to continue`}</Text>
    </Pressable>
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
  image11Icon: {
    top: 71,
    left: 114,
    width: 79,
    height: 79,
    position: "absolute",
  },
  registrationSuccessfulLogIn: {
    marginLeft: -111,
    top: 21,
    left: "50%",
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: FontFamily.dMSansBold,
    color: Color.colorMediumblue,
    textAlign: "center",
    width: 229,
    height: 50,
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

export default Frame;
