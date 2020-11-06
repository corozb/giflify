import { useState, useEffect, useRef } from 'react'

const useInScreen = ({ distance = '100px' }) => {
  const [isInScreen, setShow] = useState(false)
  const fromRef = useRef()

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
        ? import('intersection-observer') // Polyfill
        : IntersectionObserver
    ).then(() => {
      observer = new IntersectionObserver(onChange, {
        rootMargin: distance,
      })

      observer.observe(fromRef.current)
    })

    // componentWillUnmount
    return () => observer?.disconnect()
  })

  return { isInScreen, fromRef }
}

export default useInScreen
