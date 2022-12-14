import { Image, Text, View } from "./style";

export default function CardFrutas({ img, productName }) {
  return (
    <View>
      <Image source={{ uri: img }} />
      <Text>{productName}</Text>
    </View>
  );
}
