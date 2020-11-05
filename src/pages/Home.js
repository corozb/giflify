import React from 'react'
import { Link } from 'wouter'

import SearchBox from '../components/SearchBox/SearchBox'
import ListOfGifs from '../components/ListOfGifs/ListOfGifs'
import useGif from '../hooks/useGif'

const POPULAR_GIFS = ['Dogs', 'Panda', 'Monkey']

const Home = () => {
  const { gifs } = useGif()

  return (
    <>
      <SearchBox />

      <div className='App__wrapper'>
        <div className='App__result'>
          <h3 className='Home__title'>Last Search</h3>
          <ListOfGifs gifs={gifs} />
        </div>
        <div className='App__category'>
          <div className='App__results'>
            <h3 className='Home__title'>Most Populars</h3>
            <ul>
              {POPULAR_GIFS.map((popular) => (
                <li key={popular}>
                  <Link to={`/search/${popular}`}>Gif of {popular}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
