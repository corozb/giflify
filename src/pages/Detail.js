import React from 'react'
import { Redirect } from 'wouter'
import { Helmet } from 'react-helmet'

import Gif from 'components/Gif/Gif'
import useSingleGif from 'hooks/useSingleGif'
import Spinner from 'components/Spinner/Spinner'
import useSEO from 'hooks/useSEO'

const Detail = ({ params }) => {
  const { id } = params
  const { gif, isLoading, isError } = useSingleGif(id)

  const title = gif ? gif.title : ''
  useSEO({ description: `Detail of ${title}`, title })

  if (isLoading) {
    return (
      <>
        <Helmet>
          <title>Loading...</title>
        </Helmet>
        <Spinner />
      </>
    )
  }
  if (isError) return <Redirect to='/404' />
  if (!gif) return null

  return (
    <>
      <Helmet>
        <title>{title} || Giflify</title>
      </Helmet>
      <h3 className='App-title'>{gif.title}</h3>
      <Gif {...gif} />
    </>
  )
}

export default Detail
