import React, { useEffect, useState } from 'react'
import './App.css'

import getData from './services/getData'

function App() {
  const [gifs, setGifs] = useState([])

  async function fetchData() {
    const data = await getData()
    setGifs(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='App'>
      <section className='App-content'>
        {gifs.map((gif) => (
          <ul key={gif}>
            <img src={gif} alt='' />
          </ul>
        ))}
      </section>
    </div>
  )
}

export default App
