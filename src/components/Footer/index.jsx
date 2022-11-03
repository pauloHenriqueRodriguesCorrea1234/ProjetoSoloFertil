import { TextFooter, ImageFooter, ViewFooter, TouchableOpacity } from "../styles";
import { Linking } from "react-native";

import instagran from "../../../assets/img/logoInstagran.png";
export default function Footer() {
  return (
    <ViewFooter>
      <TouchableOpacity
       onPress={() => {
        Linking.openURL(
          "https://www.instagram.com/solo_fertil_campus_aquidauana/"
        );
      }}
      >
        <TextFooter>{"@solo_fertil_campus_aquidauana"}</TextFooter>
        <ImageFooter source={instagran} />
      </TouchableOpacity>
    </ViewFooter>
  );
}
