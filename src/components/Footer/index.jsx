import { Image, Text, View, TouchableOpacity } from "./styles";
import { Linking } from "react-native";
import instagran from "../../../assets/img/logoInstagran.png";


export default function Footer() {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          Linking.openURL(
            "https://www.instagram.com/solo_fertil_campus_aquidauana/"
          );
        }}
      >
        <Text>{"@solo_fertil_campus_aquidauana"}</Text>
        <Image source={instagran} />
      </TouchableOpacity>
    </View>
  );
}