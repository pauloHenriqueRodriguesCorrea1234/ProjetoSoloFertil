import styled from "styled-components/native";

// Card de Frutas
export const ViewCardFrutas = styled.View`
  border-width: 1.1px;
  margin-top: 2%;
  margin-bottom: 2%;
  flex-direction: row;
  background-color: #d1d0ca;
  justify-content: space-between;
  margin-left: 3%;
  margin-right: 3%;
`;
export const ImageCardFrutas = styled.Image`
  width: 120px;
  height: 120px;
`;
export const TextCardFruutas = styled.Text`
  text-align: right;
  font-size: 17px;
  font-style: italic;
  padding-right: 9px;
`;

// Footer
export const ViewFooter = styled.View`
  background-color: #002e00;
  flex-direction: row;
  justify-content: center;
`;

export const TextFooter = styled.Text`
  color: #fff;
  padding: 9px;
  font-size: 14px;
`;

export const ImageFooter = styled.Image`
  margin-top: 9px;
  height: 25px;
  width: 25px;
`;

// Header Logo
export const ViewHeaderLogo = styled.View`
  margin-top: 6%;
  padding-top: 5%;
  width: 100%;
  height: 140px;
  background-color: #002e00;
  align-items: center;
  justify-content: center;
`;
export const ImageHeaderLogo = styled.Image`
  height: 205px;
  width: 205px;
`;
