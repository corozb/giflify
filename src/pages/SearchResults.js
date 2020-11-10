import React from 'react'

import useGif from '../hooks/useGif'
import ListOfGifs from 'components/ListOfGifs/ListOfGifs'
import Loader from 'components/Spinner/SearchLoader'

const SearchResults = ({ params }) => {
  const { keyword } = params
  const { loading, gifs } = useGif({ keyword })

  return (
    <>
      {loading ? (
        <Loader />
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
