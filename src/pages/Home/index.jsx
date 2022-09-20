import React from "react";
import { StyleSheet, FlatList, View } from "react-native";

// Dados 
import products from "../../../data/products";

// Imagens
import logo from "../../../assets/img/logoIFMS.png";
import instagran from "../../../assets/img/logoInstagran.png";

// Components
import HeaderLogo from "../../components/HeaderLogo";
import Footer from "../../components/Footer";
import CardFrutas from "../../components/CardFrutas";

export default function Home() {
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
  }
});  
