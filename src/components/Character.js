import React from 'react';
import { Link } from 'react-router-dom';

export default function Character({ item }) {
  return (
    <li className='character'>
      <div className='character__left-block'>
        <Link className='character__link' to={`/${item.id}`}>
          <img className='character__img' src={item.image} alt={item.name} />
        </Link>
      </div>
      <div className='character__right-block'>
        <Link className='character__link' to={`/${item.id}`}>
          <h1 className='character__title'>{item.name}</h1>
        </Link>
      </div>
    </li>
  );
}
