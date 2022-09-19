import React from "react";
import { StyleSheet, FlatList, View } from "react-native";
import products from "./data/products";
// React native com fariBase oi
/*Flatlist + array de objeto json + Nome do componente*/
import logo from "./assets/img/logoIFMS.png";
import HeaderLogo from "./components/HeaderLogo";
import Footer from "./components/Footer";
import CardFrutas from "./pages/CardFrutas";
import instagran from "./assets/img/logoInstagran.png";
// Tecla e atalho para movimentar Alt + seta

export default function App() {
  return (
    <View style={styles.conteiner}>
      <HeaderLogo logo={logo} />
      <FlatList data={products} renderItem={({ item }) => <CardFrutas data={item} />} keyExtractor={(item) => item.id}/>
      <Footer text={"@solo_fertil_campus_aquidauana"} logo={instagran} />
    </View>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: "#d4d8d4",
  },
  flatList: {
    flex: 1,
    backgroundColor: "#d4d8d4",
  },
});
