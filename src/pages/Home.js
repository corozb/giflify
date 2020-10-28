import React from 'react'
import { Link, useLocation } from 'wouter'
import SearchBox from '../components/SearchBox/SearchBox'

const POPULAR_GIFS = ['Dogs', 'Panda', 'Monkey']

const Home = () => {
  const [path, pushLocation] = useLocation()

  return (
    <>
      <SearchBox pushLocation={pushLocation} />
      <h3 className='Home__title'>Most Populars</h3>
      <ul>
        {POPULAR_GIFS.map((popular) => (
          <li key={popular}>
            <Link to={`/search/${popular}`}>Gif of {popular}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Home
