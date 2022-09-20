import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function CardFrutas({ data }) {
  return (
    <NavigationContainer>
      <TouchableOpacity style={styles.conteiner}>
        <Image style={styles.image} source={data.img} />
        <Text style={styles.text}>{data.nomeProduto}</Text>
      </TouchableOpacity>
    </NavigationContainer>
  );

}

const styles = StyleSheet.create({
  conteiner: {
    borderWidth: 1.1,
    marginVertical: "2%",
    marginHorizontal: "3%",
    flexDirection: "row",
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
  image: {
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
