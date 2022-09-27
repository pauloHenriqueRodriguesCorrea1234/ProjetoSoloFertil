import { TextFooter, ImageFooter, ViewFooter } from "../styles";
export default function Footer({ text, logo }) {
  return (
    <ViewFooter>
      <TextFooter>{text}</TextFooter>
      <ImageFooter source={logo} />
    </ViewFooter>
  );
}
