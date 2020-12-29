import React, { useRef, useEffect, useCallback } from 'react'
import debounce from 'just-debounce-it'

import useGif from '../hooks/useGif'
import ListOfGifs from 'components/ListOfGifs/ListOfGifs'
import Loader from 'components/Spinner/SearchLoader'
import useInScreen from 'hooks/useInScreen'
import useSEO from 'hooks/useSEO'

const SearchResults = ({ params }) => {
  const { keyword } = params
  const { loading, gifs, setPage } = useGif({ keyword })
  const externalRef = useRef()
  const { isInScreen } = useInScreen({
    externalRef: loading ? null : externalRef,
    once: false,
  })

  const title = gifs
    ? `${gifs.length} results of ${keyword}`
    : loading
    ? 'Loading...'
    : ''

  useSEO({ title })

  const debounceNextPage = useCallback(
    debounce(() => setPage((prevPage) => prevPage + 1), 200),
    [setPage]
  )

  useEffect(() => {
    if (isInScreen) debounceNextPage()
  }, [debounceNextPage, isInScreen])

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className='App__wrapper'>
          <h3 className='Home__title'>{decodeURI(keyword)}</h3>
          <ListOfGifs gifs={gifs} />
          <div className='visor' ref={externalRef}></div>
        </div>
      )}
    </>
  )
}

export default SearchResults
