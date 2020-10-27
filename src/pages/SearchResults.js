import React, { useState, useEffect } from 'react'

import getData from '../services/getData'
import ListOfGifs from '../components/ListOfGifs/ListOfGifs'

const SearchResults = ({ params }) => {
  const { keyword } = params
  const [gifs, setGifs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    async function fetchData() {
      const data = await getData(keyword)
      setGifs(data)
      setLoading(false)
    }
    fetchData()
  }, [keyword])

  return loading ? <h3>...Cargando</h3> : <ListOfGifs gifs={gifs} />
}

export default SearchResults
