import React, { useState, useReducer, memo } from 'react'
import { useLocation } from 'wouter'

import Button from 'components/Button/Button'

import './SearchBox.css'

const RATING = ['g', 'pg', 'pg-13', 'r']

const ACTIONS = {
  UPDATE_KEYWORD: 'update_keyword',
  UPDATE_RATING: 'update_rating',
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_KEYWORD:
      return {
        ...state,
        keyword: action.payload,
        timer: state.timer + 1,
      }

    case ACTIONS.UPDATE_RATING:
      return {
        ...state,
        rating: action.payload,
      }

    default:
      return state
  }
}

const SearchBox = ({ initialKeyword = '', initialRating = 'g' }) => {
  const [_, pushLocation] = useLocation()

  const [state, dispatch] = useReducer(reducer, {
    keyword: decodeURIComponent(initialKeyword),
    rating: initialRating,
    timer: 0,
  })

  const { keyword, rating, timer } = state
  console.log(keyword)

  const handleSubmit = (e) => {
    e.preventDefault()
    pushLocation(`/search/${keyword}/${rating}`)
  }

  const handleChange = (e) => {
    dispatch({
      type: ACTIONS.UPDATE_KEYWORD,
      payload: e.target.value,
    })
  }

  const handleRating = (e) => {
    dispatch({
      type: ACTIONS.UPDATE_RATING,
      payload: e.target.value,
    })
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

export default memo(SearchBox)
