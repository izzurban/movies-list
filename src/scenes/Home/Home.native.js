import { ScrollView } from 'react-native';
import React, { useState, useEffect }  from 'react';
import api from '../../../api/trakt';
import omdb from '../../../api/omdb';
import List from '../../common/List/List.native';

const Home = () => {

  const [omdbData, setOmdbData] = useState([]);
  const [traktData, setTraktData] = useState([]);
  const [listItem, setListItem] = useState([]);

  const getTraktData = async() => {
    await api.trending()
      .then(async (res) => {
        setTraktData(res.data);
    })
    .catch((err) => {
      console.log('trakt error', err.response);
    });
  }

  const getOmdbData = async () => {
    let promises = traktData.map((movie, index) => {
      return omdb.omdbGet(movie.movie.ids.imdb);
    });

    Promise.all(promises)
      .then(function (responses) {
        const resOmdb = responses.map((response) => response.data)
        setOmdbData(resOmdb);
        })
      .catch((err) => console.log('omdb error', err));
  }

  useEffect(() => {
    getTraktData();
  }, []);

  useEffect(() => {
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

      <ScrollView>
        <List
          listItem={listItem}
        />
      </ScrollView>
  );
}

export default Home;