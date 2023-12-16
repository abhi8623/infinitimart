import React, { useState, useCallback } from "react";
import { View, StyleSheet, Image, Text, Pressable, Modal } from "react-native";
import Frame5 from "./Frame5";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Frame6 = ({ onClose }) => {
  const [rectangleImageVisible, setRectangleImageVisible] = useState(false);
  const navigation = useNavigation();

  const openRectangleImage = useCallback(() => {
    setRectangleImageVisible(true);
  }, []);

  const closeRectangleImage = useCallback(() => {
    setRectangleImageVisible(false);
  }, []);

  return (
    <>
      <View style={[styles.rectangleParent, styles.frameChildLayout]}>
        <View style={[styles.frameChild, styles.frameChildLayout]} />
        <Image
          style={styles.image14Icon}
          resizeMode="cover"
          source={require("../assets/image-14.png")}
        />
        <Text style={styles.areYouSure}>Are you sure</Text>
        <Pressable
          style={[styles.wrapper, styles.wrapperLayout]}
          onPress={openRectangleImage}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/rectangle-13.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.container, styles.wrapperLayout]}
          onPress={() => navigation.navigate("Frame7")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/rectangle-13.png")}
          />
        </Pressable>
        <Text style={[styles.yes, styles.noTypo]}>Yes</Text>
        <Text style={[styles.no, styles.noTypo]}>No</Text>
      </View>

      <Modal animationType="fade" transparent visible={rectangleImageVisible}>
        <View style={styles.rectangleImageOverlay}>
          <Pressable
            style={styles.rectangleImageBg}
            onPress={closeRectangleImage}
          />
          <Frame5 onClose={closeRectangleImage} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  frameChildLayout: {
    height: 192,
    width: 300,
  },
  wrapperLayout: {
    height: 39,
    width: 90,
    top: 129,
    position: "absolute",
  },
  noTypo: {
    height: 20,
    width: 57,
    top: 138,
    textAlign: "left",
    color: Color.colorDodgerblue_100,
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    lineHeight: 20,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  frameChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_35xl,
    backgroundColor: Color.colorGray,
    position: "absolute",
  },
  image14Icon: {
    top: 60,
    left: 120,
    width: 60,
    height: 60,
    position: "absolute",
  },
  areYouSure: {
    marginLeft: -49,
    top: 23,
    left: "50%",
    width: 229,
    height: 50,
    textAlign: "left",
    color: Color.colorDodgerblue_100,
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    lineHeight: 20,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  rectangleImageOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  rectangleImageBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  icon: {
    borderRadius: Border.br_xl,
    width: "100%",
    height: "100%",
  },
  wrapper: {
    left: 37,
  },
  container: {
    left: 180,
  },
  yes: {
    left: 66,
  },
  no: {
    left: 214,
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

export default Frame6;
