import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import CharacterDetailed from '../CharacterDetailed';
import axios from 'axios';

export default function CharacterPage() {
  const [singleCharacter, setSingleCharacter] = useState();
  let { id } = useParams();

  useEffect(() => {
    fetchSingleCharacters(id);
  }, []);

  async function fetchSingleCharacters(id) {
    const result = await axios(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    setSingleCharacter(result.data);
  }

  if (singleCharacter) {
    return <CharacterDetailed singleCharacter={singleCharacter} />;
  } else {
    return (
      <div className='loading'>
        <h1>LOADING</h1>
      </div>
    );
  }
}
