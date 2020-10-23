import React from 'react'
import { Link } from 'wouter'

import './Home.css'

const POPULAR_GIFS = ['Dogs', 'Panda', 'Monkey']

const Home = () => {
  return (
    <>
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
