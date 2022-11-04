import { View, Image } from "./styles"
import logo from "../../../assets/img/logoIFMS.png";

export default function Header() {
  return (
    <View>
      <Image source={logo} />
    </View>
  );
}
