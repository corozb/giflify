import React, { useContext } from 'react'
import Gif from '../components/Gif/Gif'

import ContextGif from '../context/ContextGif'

const Detail = ({ params }) => {
  const { id } = params
  const { gifs } = useContext(ContextGif)

  const gif = gifs.find((singleGif) => singleGif.id === id)

  return <Gif {...gif} />
}

export default Detail
