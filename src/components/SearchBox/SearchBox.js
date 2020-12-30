import React from 'react'
import { useLocation } from 'wouter'

import Button from 'components/Button/Button'
import './SearchBox.css'
import useForm from './hook'

const RATING = ['g', 'pg', 'pg-13', 'r']

const SearchBox = ({ initialKeyword = '', initialRating = 'g' }) => {
  const [_, pushLocation] = useLocation()
  const { keyword, rating, timer, updateKeyword, updateRating } = useForm({
    initialKeyword,
    initialRating,
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    pushLocation(`/search/${keyword}/${rating}`)
  }

  const handleChange = (e) => {
    updateKeyword(e.target.value)
  }

  const handleRating = (e) => {
    updateRating(e.target.value)
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
          <option disabled>Rating:</option>
          {RATING.map((rating) => (
            <option key={rating}>{rating}</option>
          ))}
        </select>
        <Button />
        <small>{timer}</small>
      </form>
    </div>
  )
}

export default React.memo(SearchBox)
