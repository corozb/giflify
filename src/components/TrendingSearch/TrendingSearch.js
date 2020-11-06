import React, { useState, useEffect, useRef } from 'react'
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

  return (
    <div>
      <Category name='Trending' options={trends} />
    </div>
  )
}

const LazyTrending = () => {
  const [show, setShow] = useState(false)
  const elRef = useRef()

  useEffect(() => {
    let observer
    const onChange = (entries, observer) => {
      const el = entries[0]
      console.log(el.isIntersecting)
      if (el.isIntersecting) {
        setShow(true)
        observer.disconnect() //disconnect observer after view once
      }
    }

    Promise.resolve(
      typeof IntersectionObserver === 'undefined'
        ? import('intersection-observer')
        : IntersectionObserver
    ).then(() => {
      observer = new IntersectionObserver(onChange, {
        rootMargin: '100px',
      })

      observer.observe(elRef.current)
    })

    // componentWillUnmount
    return () => observer?.disconnect()
  })

  return <div ref={elRef}>{show ? <TrendingSearch /> : null}</div>
}

export default LazyTrending
