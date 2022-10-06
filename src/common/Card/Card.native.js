import React from "react";
import { useWindowDimensions } from "react-native";
import {
  Container,
  Poster
} from './Card.styles.native';

const Card = (props) => {
  const {
    selectedItemData,
    openDetails,
  } = props
  
  const window = useWindowDimensions();
  return (
    <Container onPress={() => { openDetails(selectedItemData) }}>
      <Poster source={{ uri: selectedItemData.Poster }} resizeMode="cover" windowWidth={window.width} />
    </Container>
  );
}

export default Card;