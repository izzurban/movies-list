import { Modal, ScrollView } from 'react-native';
import React, { useState }  from 'react';
import {
  Container,
  CardList,
} from './List.styles.native'
import Card from '../Card/Card.native';
import Details from '../Details/Details.native';

const List = (props) => {
  const {
    listItem,
  } = props;

  const [selectedItem, setSelectedItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const openDetails = (item = null) => {
    setSelectedItem(item)
    setModalVisible(!modalVisible)
  };

  return (
    <Container>
      <ScrollView>
        <CardList>
          {listItem && listItem.map(el => {
            if (el.Error || el.Poster === 'N/A') {
              return null;
            }
            return (
              <Card
                key={el.imdbID || el.show?.ids?.imdb }
                selectedItemData={el}
                openDetails={openDetails}
              />)
          })}
        </CardList>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <Details
            selectedItem={selectedItem}
            openDetails={openDetails}
          />
        </Modal>
      </ScrollView>
    </Container>
  );
}

export default List;