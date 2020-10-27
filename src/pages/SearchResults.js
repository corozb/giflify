import React from 'react'

import useGif from '../hooks/useGif'
import ListOfGifs from '../components/ListOfGifs/ListOfGifs'
import Spinner from '../components/Spinner/Spinner'

const SearchResults = ({ params }) => {
  const { keyword } = params
  const { gifs, loading } = useGif({ keyword })

  return <>{loading ? <Spinner /> : <ListOfGifs gifs={gifs} />}</>
}

export default SearchResults
