import React, { useState } from 'react'
import { useLocation } from 'wouter'

import './SearchBox.css'

const SearchBox = () => {
  const [_, pushLocation] = useLocation()
  const [keyword, setKeyword] = useState('')

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
    </>
  )
}

export default SearchBox
