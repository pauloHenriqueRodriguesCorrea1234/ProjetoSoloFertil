import { ViewHeaderLogo, ImageHeaderLogo } from "../styles";

export default function Header({ logo }) {
  return (
    <ViewHeaderLogo>
      <ImageHeaderLogo source={logo}/>
    </ViewHeaderLogo>
  );
}
