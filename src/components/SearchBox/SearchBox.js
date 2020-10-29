import React, { useState } from 'react'

import useGif from '../../hooks/useGif'
import ListOfGifs from '../ListOfGifs/ListOfGifs'
import './SearchBox.css'

const SearchBox = ({ pushLocation }) => {
  const [keyword, setKeyword] = useState('')
  const { gifs, loading } = useGif()

  const handleSubmit = (e) => {
    e.preventDefault()
    pushLocation(`/search/${keyword}`)
  }

  const handleChange = (e) => {
    setKeyword(e.target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={keyword}
          onChange={handleChange}
          placeholder='Search all the GIFs and Stickers'
          autoFocus
        />
      </form>
      <h3 className='Home__title'>Last Search</h3>
      <ListOfGifs gifs={gifs} />
    </>
  )
}

export default SearchBox
