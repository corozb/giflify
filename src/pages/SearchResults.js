import React, { useState, useEffect } from 'react'

import getData from '../services/getData'
import ListOfGifs from '../components/ListOfGifs/ListOfGifs'
import Spinner from '../components/Spinner/Spinner'

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

  return loading ? <Spinner /> : <ListOfGifs gifs={gifs} />
}

export default SearchResults
