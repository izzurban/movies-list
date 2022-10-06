import React, { useState } from "react";
import { useWindowDimensions } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import {
  Poster,
  ContainerTransparent,
  ModalView,
  Button,
  TextStyle,
  ModalText,
  FavouriteIcon,
  InfoRow,
  View,
} from './Details.styles.native';

const Details = (props) => {
  const {
    openDetails,
    selectedItem,
  } = props

  const window = useWindowDimensions();
  const [favourited, setFavourited] = useState(false);

  return (
    <ContainerTransparent>
      <ModalView>
        <Poster source={{ uri: selectedItem?.Poster }} resizeMode="cover" windowWidth={window.width} windowHeight={window.height} />
        
        <View windowWidth={window.width} windowHeight={window.height}>
          <ModalText>{selectedItem?.Title}</ModalText>
          <ModalText>{selectedItem?.Plot}</ModalText>
          <InfoRow windowWidth={window.width} windowHeight={window.height}>
            <FavouriteIcon>
              <MaterialIcons onPress={() => setFavourited(!favourited)} name={favourited ? "favorite" : "favorite-border"} size={24} color="red" />
              <ModalText>{favourited ? "Favorito" : "Favoritar"}</ModalText>
            </FavouriteIcon>
            <ModalText>{`Ano\n ${selectedItem?.Year}`}</ModalText>
            <ModalText>{`Prêmios\n ${selectedItem?.Awards}`}</ModalText>
          </InfoRow>
        </View>

        <Button
          onPress={() => openDetails()}
        >
          <TextStyle>Voltar</TextStyle>
        </Button>
      </ModalView>
    </ContainerTransparent>
  );
}

export default Details;