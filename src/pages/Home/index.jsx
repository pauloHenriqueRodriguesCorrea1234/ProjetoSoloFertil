import { StyleSheet, View, ScrollView, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
// Dados
import product from "../../../data/products";

// Imagens
import logo from "../../../assets/img/logoIFMS.png";
import instagran from "../../../assets/img/logoInstagran.png";

// Components
import HeaderLogo from "../../components/HeaderLogo";
import Footer from "../../components/Footer";
import CardFrutas from "../../components/CardFrutas";

export default function Home({ navigation }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(product);
  }, []);

  return (
    <View style={styles.container}>
      {/* Logo Solo Fértil */}
      <HeaderLogo logo={logo} />

      {/* Card De Produtos */}
      {products.length > 0 && (
        <ScrollView>
          {products.map((item) => (
            <TouchableOpacity
              onPress={() => navigation.push("Details", { products: item })}>
              <CardFrutas
                key={item.id}
                title={item.nomeProduto}
                img={item.img}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}

      {/* intagram */}
      <Footer text={"@solo_fertil_campus_aquidauana"} logo={instagran} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d4d8d4",
  },
});
