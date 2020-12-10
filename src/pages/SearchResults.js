import React, { useRef, useEffect, useCallback } from 'react'
import debounce from 'just-debounce-it'

import useGif from '../hooks/useGif'
import ListOfGifs from 'components/ListOfGifs/ListOfGifs'
import Loader from 'components/Spinner/SearchLoader'
import useInScreen from 'hooks/useInScreen'

const SearchResults = ({ params }) => {
  const { keyword } = params
  const { loading, gifs, setPage } = useGif({ keyword })
  const externalRef = useRef()
  const { isInScreen } = useInScreen({
    externalRef: loading ? null : externalRef,
    once: false,
  })

  const debounceNextPage = useCallback(
    debounce(() => setPage((prevPage) => prevPage + 1), 200),
    [setPage]
  )

  useEffect(() => {
    console.log(isInScreen)
    if (isInScreen) debounceNextPage()
  }, [debounceNextPage, isInScreen])

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <h3 className='Home__title'>{decodeURI(keyword)}</h3>
          <ListOfGifs gifs={gifs} />
          <div className='visor' ref={externalRef}></div>
        </>
      )}
    </>
  )
}

export default SearchResults
