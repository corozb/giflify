import React, { useState, useEffect } from 'react'

import getData from '../services/getData'
import Gif from './Gif/Gif'

const ListOfGif = ({ params }) => {
  const { keyword } = params
  const [gifs, setGifs] = useState([])
  const [loading, setLoading] = useState(true)

  async function fetchData() {
    const data = await getData(keyword)
    setGifs(data)
    setLoading(false)
  }

  useEffect(() => {
    setLoading(true)
    fetchData()
  }, [keyword])

  return loading ? (
    <h3>...Cargando</h3>
  ) : (
    <h3>
      {gifs.map(({ id, title, url }) => (
        <Gif id={id} key={id} title={title} url={url} />
      ))}
    </h3>
  )
}

export default ListOfGif
