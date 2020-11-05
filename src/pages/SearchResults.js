import React from 'react'

import useGif from '../hooks/useGif'
import ListOfGifs from '../components/ListOfGifs/ListOfGifs'
import Spinner from '../components/Spinner/Spinner'

const SearchResults = ({ params }) => {
  const { keyword } = params
  const { loading, gifs } = useGif({ keyword })

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h3 className='Home__title'>{decodeURI(keyword)}</h3>
          <ListOfGifs gifs={gifs} />
        </>
      )}
    </>
  )
}

export default SearchResults
