import React from 'react';

export default function CharacterDetailed({ singleCharacter }) {
  return (
    <div className='container container__single-character'>
      <article className='character'>
        <div className='character__left-block'>
          <img
            className='character__img'
            src={singleCharacter.image}
            alt={singleCharacter.name}
          />
        </div>
        <div className='character__right-block'>
          <h1 className='character__title'>{singleCharacter.name}</h1>
          <div className='character__status'>
            <div
              className={`character__status-color ${
                singleCharacter.status === 'Alive' ? 'alive' : 'dead'
              }`}
            ></div>
            <span className='character__status-title'>Status:</span>
            <strong className='character__status-text'>
              {singleCharacter.status}
            </strong>
          </div>
          <div className='character__gender'>
            <span className='character__gender-title'>Gender:</span>
            <span className='character__gender-text'>
              {singleCharacter.gender}
            </span>
          </div>
          <div className='character__location'>
            <span className='character__location-title'>Location:</span>
            <span className='character__location-text'>
              {singleCharacter.location.name}
            </span>
          </div>
        </div>
      </article>
    </div>
  );
}
