import React from 'react'
import { Route, Link } from 'wouter'
import './App.css'

import Context from './context/Context'
import { ContextGifProvider } from './context/ContextGif'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'
import logo from './components/assets/giflify.png'

function App() {
  return (
    <Context.Provider
      value={{
        name: 'Cristian Orozco',
        getHired: true,
      }}
    >
      <div className='App'>
        <section className='App__content'>
          <Link to={'/'}>
            <figure className='App__logo'>
              <img src={logo} alt='Giflify logo' />
            </figure>
          </Link>
          <ContextGifProvider>
            <Route path='/' component={Home} />
            <Route path='/search/:keyword/:rating?' component={SearchResults} />
            <Route path='/gif/:id' component={Detail} />
            <Route path='/404' component={() => <h1>404 ERROR :(</h1>} />
          </ContextGifProvider>
        </section>
      </div>
    </Context.Provider>
  )
}

export default App
