import React, { useEffect, useState } from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import {
  Container,
  Icon,
  ViewTextImput,
  TextInput,
  LoadingContainer,
  Text,
} from './Search.styles.native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import List from '../../common/List/List.native';
import api from '../../../api/trakt';
import omdb from '../../../api/omdb';

const Search = () => {
  const [omdbData, setOmdbData] = useState([]);
  const [traktData, setTraktData] = useState([]);
  const [listItem, setListItem] = useState(null);
  const [word, setWord] = useState('');
  const [loadingMsg, setLoadingMsg] = useState('Carregando...');

  const search = async (word = '007', type = 'movie') => {
    setListItem(null);
    setLoadingMsg('Procurando Filmes...');
    await api.search(word.toString(), type)
      .then(async (res) => {
        setTraktData(res.data)
      })
  }
  
  const getOmdbData = async () => {
    let promises = traktData.map((movie, index) => {
      return omdb.omdbGet(movie.movie?.ids.imdb);

    });

    Promise.all(promises)
      .then(function (responses) {
        const resOmdb = responses.map((response) => response.data)

        setOmdbData(resOmdb);
      })
      .catch((err) => console.log('omdb error', err));
    // Após receber a resposta da api da Trak.tv, registra uma promise para cada filme
    // Essas promises serão realizadas simultâneamente e trarão o banner e outros dados da api OMDb
    // Quando as promises são resolvidas, mapeia as respostas e confere se o filme está entre os favoritos
  }

  useEffect(() => {
    setLoadingMsg('Procurando Imagens...');
    getOmdbData();
  }, [traktData]);

  useEffect(() => {
    const full = omdbData.map((el, index) => {
      const res = {
        ...el,
        ...traktData[index]
      }
      return res
    });
    setListItem(full);
  }, [omdbData]);
  
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Container>
        {listItem && <List
          listItem={listItem}
        />
        }
        {!listItem && <LoadingContainer>
          <Text>{loadingMsg}</Text>
        </LoadingContainer>
        }
        <ViewTextImput>
          <TextInput
            onChangeText={(word) => { setWord(word) }}
            placeholder="Pesquise..."
          />
          <Icon onPress={() => { search(word, 'movie') }}>
            <Ionicons name="search" size={24} color="gray" />
          </Icon>
        </ViewTextImput>
      </Container>
    </TouchableWithoutFeedback>
  )
};

export default Search;

 