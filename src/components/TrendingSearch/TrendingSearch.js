import React, { useState, useEffect } from 'react'

import getTrending from 'services/getTrending'
import Category from 'components/Category/Category'

const TrendingSearch = () => {
  const [trends, setTrends] = useState([])

  useEffect(() => {
    async function fetchData() {
      const data = await getTrending()
      setTrends(data)
    }
    fetchData()
  }, [])

  return <Category name='Trending' options={trends} />
}

export default TrendingSearch
