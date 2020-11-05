import React from 'react'
import { Link } from 'wouter'

const Category = ({ name, options }) => {
  return (
    <div className='App__results'>
      <h3 className='Home__title'>{name}</h3>
      <ul>
        {options.map((popular, index) => (
          <li key={index}>
            <Link to={`/search/${popular}`}>{popular}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Category
