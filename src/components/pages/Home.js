import React, { useEffect, useRef, useContext } from 'react';
import Character from '../Character';
import { StoreContext } from '../../store';

export default function Home() {
  const {
    characters: [characters],
    loading: [loading, setLoading],
    intersect: [intersect, setIntersect],
  } = useContext(StoreContext);

  const container = useRef(null);

  useEffect(() => {
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.8,
    };
    const elem = container.current;
    const observer = new IntersectionObserver(handleObserver, options);
    observer.observe(elem);
    return () => {
      observer.unobserve(elem);
    };
  }, []);

  function handleObserver(entities, observer) {
    const isIntersecting = entities[0].isIntersecting;
    setIntersect(isIntersecting);
  }

  return (
    <>
      <ul className='container'>
        {characters.map(item => (
          <Character item={item} key={item.id} />
        ))}
      </ul>
      <div className='loading-container' ref={container}>
        {loading ? <h2 className='loading'>LOADING</h2> : null}
      </div>
    </>
  );
}
