import React from 'react'

import Gif from 'components/Gif/Gif'
import './ListOfGifs.css'

const ListOfGifs = ({ gifs }) => {
  return (
    <div className='gif__list'>
      {gifs.map(({ id, title, url, ...restOfGifs }) => (
        <Gif id={id} key={id} title={title} url={url} extraInfo={restOfGifs} />
      ))}
    </div>
  )
}

export default ListOfGifs
