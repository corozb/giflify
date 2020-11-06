import React, { useState, useEffect, useRef } from 'react'

import getTrending from 'services/getTrending'
import Category from 'components/Category/Category'
import useInScreen from 'hooks/useInScreen'

const TrendingSearch = () => {
  const [trends, setTrends] = useState([])

  useEffect(() => {
    async function fetchData() {
      const data = await getTrending()
      setTrends(data)
    }
    fetchData()
  }, [])

  return (
    <div>
      <Category name='Trending' options={trends} />
    </div>
  )
}

const LazyTrending = () => {
  const { isInScreen, fromRef } = useInScreen({ distance: '200px' })

  return <div ref={fromRef}>{isInScreen ? <TrendingSearch /> : null}</div>
}

export default LazyTrending
