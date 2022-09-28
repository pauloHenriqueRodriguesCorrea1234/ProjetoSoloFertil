import { ScrollView, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";

// Estilização 
import { ViewPrincipalHome } from "../styles";

// Dados
import { itens } from "../../../data/itens.json";

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
    setProducts(itens);
  }, []);

  return (
    <ViewPrincipalHome>
      {/* Logo Solo Fértil */}
      <HeaderLogo logo={logo} />

      {/* Card De Produtos */}
      {products.length > 0 && (
        <ScrollView>
          {products.map((itens) => (
            <TouchableOpacity
              onPress={() => navigation.push("Details", { itens: itens })}>
              <CardFrutas key={itens} title={itens.nomeProduto} coverUrl={itens.coverUrl} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}

      {/* intagram */}
      <Footer text={"@solo_fertil_campus_aquidauana"} logo={instagran} />
    </ViewPrincipalHome>
  );
}