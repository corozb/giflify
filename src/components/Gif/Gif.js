import React from 'react'
import { Link } from 'wouter'

import './Gif.css'

const Gif = ({ id, title, url }) => {
  return (
    <div className='gif'>
      <Link to={`/gif/${id}`} className='gif__link'>
        <h4>{title}</h4>
        <img src={url} alt={title} loading='lazy' />
      </Link>
    </div>
  )
}

export default Gif
