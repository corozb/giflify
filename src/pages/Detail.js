import React from 'react'

import Gif from 'components/Gif/Gif'
import useSingleGif from 'hooks/useSingleGif'
import Spinner from 'components/Spinner/Spinner'
import { Redirect } from 'wouter'

const Detail = ({ params }) => {
  const { id } = params
  const { gif, isLoading, isError } = useSingleGif(id)

  if (isLoading) return <Spinner />
  if (isError) return <Redirect to='/404' />
  if (!gif) return null

  return (
    <Redirect>
      <h3 className='App-title'>{gif.title}</h3>
      <Gif {...gif} />
    </Redirect>
  )
}

export default Detail
