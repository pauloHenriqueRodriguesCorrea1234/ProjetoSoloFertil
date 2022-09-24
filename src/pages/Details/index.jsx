import React from "react";
import { View, ScrollView, Image, Text, StyleSheet } from "react-native";

export default function Details({ route }) {
  const { products } = route.params;
  return (
    <View>
      <ScrollView>
        <View style={styles.conteiner}>
          <View>
            <Image
              resizeMode="contain"
              source={products.img}
              style={styles.Img}
            />
            <Text style={styles.Text}>{products.nomeProduto}</Text>
          </View>

          <View style={styles.View} >
            <Text style={styles.Text}>Valores Nutricionais do {products.nomeProduto}</Text>
          </View>
          <Text style={styles.Text}>Benficios do {products.nomeProduto}</Text>
          <View>
            <Text style={styles.Text}>Número do Produtor: {products.numeroProdutor}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    margin: 20,
    backgroundColor: "#2e2e2e",
    flexDirection: "column",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",

  },
  Text: {
    color: "#fff",
    textAlign:"center",
  },
  Img: {
    width: 190,
    height: 190,
  },
  View: {
  alalignItems: "center",
  justifyContent: "center",

  }
});
