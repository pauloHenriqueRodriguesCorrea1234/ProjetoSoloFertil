// Estilização
import { View, ScrollView, TouchableOpacity } from "./style";
// Dados
import { producers } from "../../../data/producer.json";
// Components
import Producers from "../Producers";
// Estados
import { useState, useEffect } from "react";
// Componentes
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Home({ navigation }) {
  const [producer, setProduce] = useState([]);

  useEffect(() => {
    setProduce(producers);
  }, []);

  return (
    <View>
      <Header />
      {producer.length > 0 && (
        <ScrollView>
          {producer.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() =>
                {navigation.push("Product", { producers: item })}}>
              <Producers nameProducers={item.name} img={item.img} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
      <Footer />
    </View>
  );
}
