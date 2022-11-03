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
  const { item } = route.params;
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <ViewPrincipalDetais>
          <View>
            <ImageDetais resizeMode="contain" source={{ uri: item.coverUrl }} />
          </View>

          <ViewDetais>
            <TextDetais>Valores Nutricionais do {item.nomeProduto}</TextDetais>
            <TextDetais>{item.valoreNutricionais.join(", ")}</TextDetais>
          </ViewDetais>

          <View>
            <TextDetais>Benficios do {item.nomeProduto}</TextDetais>
          </View>

          <View>
            <TextDetais>Número do Produtor: {item.numeroProdutor}</TextDetais>
          </View>
        </ViewPrincipalDetais>
      </ScrollView>
      <Footer/>
    </View>
  );
}
