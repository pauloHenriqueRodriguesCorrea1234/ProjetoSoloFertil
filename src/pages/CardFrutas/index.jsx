import { View, Image, Text } from "./styles";
export default function CardFrutas({ title, coverUrl }) {
  return (
    <View>
      <Image source={{ uri: coverUrl }} />
      <Text>{title}</Text>
    </View>
  );
}
