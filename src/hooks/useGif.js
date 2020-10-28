import { useState, useEffect } from 'react'
import getData from '../services/getData'

const useGif = ({ keyword }) => {
  const [gifs, setGifs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    async function fetchData() {
      const data = await getData(keyword)
      setGifs(data)
      setLoading(false)
    }
    fetchData()
  }, [keyword])

  return { gifs, loading }
}

export default useGif
