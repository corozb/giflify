import { useState, useEffect, useContext } from 'react'
import getData from 'services/getData'

import ContextGif from 'context/ContextGif'

const useGif = ({ keyword } = { keyword: '' }) => {
  const [loading, setLoading] = useState(false)
  const { gifs, setGifs } = useContext(ContextGif)

  useEffect(() => {
    setLoading(true)

    // get data from localStorage
    const getKeyword =
      keyword || localStorage.getItem('lastKeyword') || 'random'

    async function fetchData() {
      const data = await getData(getKeyword)
      setGifs(data)
      setLoading(false)
      // save in localStorage
      localStorage.setItem('lastKeyword', keyword)
    }
    fetchData()
  }, [keyword, setGifs])

  return { gifs, loading }
}

export default useGif
