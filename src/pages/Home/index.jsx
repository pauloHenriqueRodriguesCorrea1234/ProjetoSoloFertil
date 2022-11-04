import { View, ScrollView, TouchableOpacity } from "./styles";
import { useEffect, useState } from "react";

// Dados
import { itens } from "../../../data/itens.json";

// Components
import HeaderLogo from "../../components/HeaderLogo";
import Footer from "../../components/Footer";
import CardFrutas from "../CardFrutas";

export default function Home({ navigation }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(itens);
  }, []);

  return (
    <View>
      {/* Logo Solo Fértil */}
      <HeaderLogo/>

      {/* Card De Produtos */}
      {products.length > 0 && (
        <ScrollView>
          {products.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => navigation.push("Details", { item: item })}
            >
              <CardFrutas title={item.nomeProduto} coverUrl={item.coverUrl} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}

      {/* intagram */}
      <Footer/>
    </View>
  );
}
