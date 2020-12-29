import { useState, useEffect, useContext } from 'react'
import getData from 'services/getData'

import ContextGif from 'context/ContextGif'

const INITIAL_PAGE = 0

export default function useGif({ keyword, rating } = { keyword: '' }) {
  const [loading, setLoading] = useState(false)
  const [nextLoading, setNextLoading] = useState(false)
  const [page, setPage] = useState(INITIAL_PAGE)
  const { gifs, setGifs } = useContext(ContextGif)

  // get data from localStorage
  const getKeyword = keyword || localStorage.getItem('lastKeyword') || 'random'

  useEffect(() => {
    setLoading(true)

    async function fetchData() {
      const data = await getData(getKeyword, rating)
      setGifs(data)
      setLoading(false)

      // save in localStorage
      localStorage.setItem('lastKeyword', keyword)
    }
    fetchData()
  }, [keyword, rating, getKeyword, setGifs])

  useEffect(() => {
    if (page === INITIAL_PAGE) return

    setNextLoading(true)
    getData(getKeyword, rating, page).then((nextGifs) => {
      setGifs((prevGifs) => prevGifs.concat(nextGifs))
      setNextLoading(false)
    })
  }, [getKeyword, rating, page, setGifs])

  return { gifs, loading, nextLoading, setPage }
}
