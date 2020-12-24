import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

export const StoreContext = React.createContext(null);
export default ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [intersect, setIntersect] = useState(false);
  const [loading, setLoading] = useState(false);
  const char = useRef(10);

  useEffect(() => {
    if (intersect) {
      fetchCharacters();
    }
  }, [intersect]);

  function makeArray() {
    return [...Array(char.current).keys()].map(x => x + characters.length + 1);
  }

  async function fetchCharacters() {
    setLoading(true);
    let list = makeArray();
    const result = await axios(
      `https://rickandmortyapi.com/api/character/${list}`
    );
    const finalArray = [...characters, ...result.data];
    setCharacters(finalArray);
    setLoading(false);
  }

  const getSingleCharacter = id => {
    let list = [...characters];
    const singleCharacter = list.find(item => item.id === id);
    return singleCharacter;
  };

  const store = {
    characters: [characters, setCharacters],
    intersect: [intersect, setIntersect],
    loading: [loading, setLoading],
    getSingleCharacter,
  };
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
