import { useState, useEffect, useRef } from 'react'

const useInScreen = ({ distance = '400px', externalRef, once = true }) => {
  const [isInScreen, setShow] = useState(false)
  const fromRef = useRef()

  useEffect(() => {
    let observer
    const element = externalRef ? externalRef.current : fromRef.current // select what kind of reference we gonna use

    const onChange = (entries, observer) => {
      const el = entries[0]
      if (el.isIntersecting) {
        setShow(true)
        once && observer.disconnect() //disconnect observer after view once
      } else {
        !once && setShow(false)
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

      if (element) observer.observe(element)
    })

    // componentWillUnmount
    return () => observer?.disconnect()
  })

  return { isInScreen, fromRef }
}

export default useInScreen
