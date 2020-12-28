import { useEffect, useState } from 'react'

import useGif from './useGif'
import getSingleGif from 'services/getSingleGif'

export default function useSingleGif(id) {
  const { gifs } = useGif()
  const gifFromCache = gifs.find((singleGif) => singleGif.id === id)

  const [gif, setGif] = useState(gifFromCache)

  useEffect(() => {
    if (!gif) {
      getSingleGif({ id }).then(setGif)
    }
  }, [gif, id])

  return { gif }
}
