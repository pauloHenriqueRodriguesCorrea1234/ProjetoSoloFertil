import React from "react";
import { View, ScrollView, Image, Text, StyleSheet } from "react-native";

export default function Details({ route }) {
  const { itens } = route.params;
  return (
    <View>
      <ScrollView>
        <View style={styles.conteiner}>
          <View>
            <Image
              resizeMode="contain"
              source={{ uri: itens.coverUrl }}
              style={styles.Img}
            />
          </View>

          <View style={styles.View} >
            <Text style={styles.Text}>Valores Nutricionais do {itens.nomeProduto}</Text>
          </View>
          <Text style={styles.Text}>Benficios do {itens.nomeProduto}</Text>
          <View>
            <Text style={styles.Text}>Número do Produtor: {itens.numeroProdutor}</Text>
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
