import React from "react";
import { Image, StyleSheet, View } from "react-native";

export default function Header({ logo }) {
  return (
    <View style={styles.containerLogo}>
      <Image source={logo} style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  containerLogo: {
    marginTop: "6%",
    paddingTop:"5%",
    width: "100%",
    height: 140,
    backgroundColor: "#002e00",
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    height: 205,
    width: 205,
  },
});
