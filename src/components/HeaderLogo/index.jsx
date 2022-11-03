import { ViewHeaderLogo, ImageHeaderLogo } from "../styles";

import logo from "../../../assets/img/logoIFMS.png";

export default function Header() {
  return (
    <ViewHeaderLogo>
      <ImageHeaderLogo source={logo} />
    </ViewHeaderLogo>
  );
}
