import React, { lazy, Suspense } from 'react'

import useInScreen from 'hooks/useInScreen'
import Loader from 'components/Spinner/CategoryLoader'

const TrendingSearch = lazy(() => import('./TrendingSearch'))

const LazyTrending = () => {
  const { isInScreen, fromRef } = useInScreen({ distance: '100px' })

  return (
    <div ref={fromRef}>
      <Suspense fallback={<Loader />}>
        {isInScreen ? <TrendingSearch /> : null}
      </Suspense>
    </div>
  )
}

export default LazyTrending
