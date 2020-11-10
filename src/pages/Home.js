import React from 'react'

import useGif from 'hooks/useGif'
import SearchBox from 'components/SearchBox/SearchBox'
import ListOfGifs from 'components/ListOfGifs/ListOfGifs'
import LazyTrending from 'components/TrendingSearch/LazyTrending'

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
          <LazyTrending />
        </div>
      </div>
    </>
  )
}

export default Home
