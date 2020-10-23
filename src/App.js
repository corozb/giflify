import React from 'react'
import { Route, Link } from 'wouter'
import './App.css'

import Home from './pages/Home/Home'
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'
import logo from './components/assets/giflify.png'

function App() {
  return (
    <div className='App'>
      <section className='App__content'>
        <Link to={'/'}>
          <img src={logo} alt='Giflify logo' className='App__logo' />
        </Link>
        <Route path='/' component={Home} />
        <Route path='/search/:keyword' component={SearchResults} />
        <Route path='/gif/:id' component={Detail} />
      </section>
    </div>
  )
}

export default App
