import React, { useState } from 'react'
import './App.css'

const GIFS = [
  'https://media2.giphy.com/media/uDPSXySAEDv56/giphy.gif?cid=ecf05e47jun6akj7m565obcgvx6i1hz2zx0vg4gwbxg30qmb&rid=giphy.gif',
  'https://media1.giphy.com/media/4UJyRK2TXNhgk/giphy.gif?cid=ecf05e472469b0ad17b0f134e4dc3e1a010ccbdba2eb45a6&rid=giphy.gif',
]

const ANOTHERS = [
  'https://media0.giphy.com/media/4oWn7KARnID84/giphy.gif?cid=ecf05e47373b1da9a114b0168f7b6c5b457cbd56ef200f11&rid=giphy.gif',
]
function App() {
  const [gifs, setGifs] = useState(GIFS)

  console.log(gifs)
  return (
    <div className='App'>
      <section className='App-content'>
        {gifs.map((gif) => (
          <img src={gif} alt='' />
        ))}
        <button onClick={() => setGifs(ANOTHERS)}>Change Gif</button>
      </section>
    </div>
  )
}

export default App
