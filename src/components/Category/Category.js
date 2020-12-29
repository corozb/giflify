import React from 'react'
import { Link } from 'wouter'

import './Category.css'

const Category = ({ name, options }) => {
  return (
    <div className='App__results'>
      <h3 className='Category__title'>{name}</h3>
      <ul>
        {options.map((popular, index) => (
          <li className='App__results-list' key={index}>
            <Link to={`/search/${popular}`}>{popular}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Category
