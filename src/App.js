import React from 'react'
import { Route, Link } from 'wouter'
import './App.css'

import ListOfGif from './components/ListOfGif'

function App() {
  return (
    <div className='App'>
      <section className='App-content'>
        <h1>App</h1>
        <Link to='/gif/dogs'>Gifs Dogs</Link>
        <Link to='/gif/panda'>Gifs Panda</Link>
        <Link to='/gif/monkey'>Gifs Monkey</Link>
        <Route path='/gif/:keyword' component={ListOfGif} />
      </section>
    </div>
  )
}

export default App
