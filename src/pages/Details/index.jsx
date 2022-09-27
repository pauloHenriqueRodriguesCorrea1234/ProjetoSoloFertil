import { View, ScrollView } from "react-native";
import Footer from "../../components/Footer";
import instagran from "../../../assets/img/logoInstagran.png";
import {
  ImageDetais,
  ViewPrincipalDetais,
  TextDetais,
  ViewDetais,
} from "../styles";
export default function Details({ route }) {
  const { itens } = route.params;
  return (
    <View>
      <ScrollView>
        <ViewPrincipalDetais>
          
          <View>
            <ImageDetais
              resizeMode="contain"
              source={{ uri: itens.coverUrl }}
            />
          </View>

          <ViewDetais>
            <TextDetais>Valores Nutricionais do {itens.nomeProduto}</TextDetais>
            <TextDetais>{itens.valoreNutricionais.join(", ")}</TextDetais>
          </ViewDetais>

          <View>
            <TextDetais>Benficios do {itens.nomeProduto}</TextDetais>
          </View>

          <View>
            <TextDetais>Número do Produtor: {itens.numeroProdutor}</TextDetais>
          </View>
        </ViewPrincipalDetais>
      </ScrollView>
      <Footer text={"@solo_fertil_campus_aquidauana"} logo={instagran} />
    </View>
  );
}
