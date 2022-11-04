import { View, ScrollView, TouchableOpacity, Linking } from "react-native";
import Footer from "../../components/Footer";
import instagran from "../../../assets/img/logoInstagran.png";

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
            <TouchableOpacity
              onPress={() => {
                Linking.openURL("http://api.whatsapp- com/sendrphone=5511999999999"
                );
              }}
            >
              <TextDetais>Entre em contato</TextDetais>
            </TouchableOpacity>
          </View>
        </ViewPrincipalDetais>
      </ScrollView>
      <Footer />
    </View>
  );
}
