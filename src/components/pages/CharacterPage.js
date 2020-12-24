import React, { useState, useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { StoreContext } from '../../store';
import CharacterDetailed from '../CharacterDetailed';

export default function CharacterPage() {
  const { getSingleCharacter } = useContext(StoreContext);
  const [singleCharacter, setSingleCharacter] = useState();
  let { id } = useParams();

  useEffect(() => {
    let character = getSingleCharacter(+id);
    setSingleCharacter(character);
  }, []);

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
