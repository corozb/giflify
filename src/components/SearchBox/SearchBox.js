import React, { useState, memo } from 'react'
import { useLocation } from 'wouter'

import Button from 'components/Button/Button'

import './SearchBox.css'

const RATING = ['g', 'pg', 'pg-13', 'r']

const SearchBox = ({ initialKeyword = '', initialRating = 'g' }) => {
  const [_, pushLocation] = useLocation()
  const [keyword, setKeyword] = useState(decodeURIComponent(initialKeyword))
  const [rating, setRating] = useState(initialRating)

  const handleSubmit = (e) => {
    e.preventDefault()
    pushLocation(`/search/${keyword}/${rating}`)
  }

  const handleChange = (e) => {
    setKeyword(e.target.value)
  }

  const handleRating = (e) => {
    setRating(e.target.value)
  }

  return (
    <div className='header__form'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={keyword}
          onChange={handleChange}
          placeholder='Search all the GIFs and Stickers'
          autoFocus
        />
        <select value={rating} onChange={handleRating}>
          <option disabled>Rating type</option>
          {RATING.map((rating) => (
            <option key={rating}>{rating}</option>
          ))}
        </select>
        <Button />
      </form>
    </div>
  )
}

export default memo(SearchBox)
