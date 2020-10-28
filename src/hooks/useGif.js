import { useState, useEffect } from 'react'
import getData from '../services/getData'

const useGif = ({ keyword } = { keyword: null }) => {
  const [loading, setLoading] = useState(false)
  const [gifs, setGifs] = useState([])

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
  }, [keyword])

  return { gifs, loading }
}

export default useGif
