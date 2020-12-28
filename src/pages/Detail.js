import React from 'react'

import Gif from 'components/Gif/Gif'
import useSingleGif from 'hooks/useSingleGif'

const Detail = ({ params }) => {
  const { id } = params
  const { gif } = useSingleGif(id)
  if (!gif) return null

  return (
    <>
      <h3 className='App-title'>{gif.title}</h3>
      <Gif {...gif} />
    </>
  )
}

export default Detail
