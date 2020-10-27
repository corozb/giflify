import React, { useState } from 'react'

import './SearchBox.css'

const SearchBox = ({ pushLocation }) => {
  const [keyword, setKeyword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(keyword)
    pushLocation(`/search/${keyword}`)
  }

  const handleChange = (e) => {
    setKeyword(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={keyword}
        onChange={handleChange}
        placeholder='Search all the GIFs and Stickers'
        autoFocus
      />
    </form>
  )
}

export default SearchBox
