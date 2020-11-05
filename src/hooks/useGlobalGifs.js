import { useContext } from 'react'

import ContextGif from 'context/ContextGif'

// Hook just for read
const useGlobalGifs = () => {
  const { gifs } = useContext(ContextGif)
  return gifs
}

export default useGlobalGifs
