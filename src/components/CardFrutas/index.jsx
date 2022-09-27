
import { ViewCardFrutas, ImageCardFrutas, TextCardFruutas} from "../styles";
export default function CardFrutas({ title, coverUrl }) {
  return (
    <ViewCardFrutas>
      <ImageCardFrutas source={{ uri: coverUrl }} />
      <TextCardFruutas>{title}</TextCardFruutas>
    </ViewCardFrutas>
  );
}
