import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function CardFrutas({ title, coverUrl }) {
  return (
    <View style={styles.conteiner}>
      <Image style={styles.coverUrl} source={{uri:coverUrl}} />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    borderWidth: 1.1,
    marginVertical: "2%",
    marginHorizontal: "3%",
    flexDirection: "row",
    backgroundColor: "#e5dfd1",
    justifyContent: "space-between",
  },
  coverUrl: {
    width: 120,
    height: 120,
  },
  text: {
    textAlign: "right",
    fontSize: 17,
    fontStyle: "italic",
    paddingRight: 9,
  },
});
