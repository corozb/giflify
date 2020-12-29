import React from 'react'
import ContentLoader from 'react-content-loader'

const SearchLoader = (props) => (
  <ContentLoader
    speed={5}
    width={400}
    height={160}
    viewBox='0 0 400 160'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
    {...props}
  >
    <rect x='173' y='141' rx='0' ry='0' width='0' height='1' />
    <rect x='171' y='149' rx='0' ry='0' width='0' height='1' />
    <rect x='171' y='149' rx='0' ry='0' width='1' height='0' />
    <rect x='40' y='9' rx='0' ry='0' width='127' height='139' />
    <rect x='179' y='10' rx='0' ry='0' width='145' height='74' />
    <rect x='179' y='92' rx='0' ry='0' width='145' height='55' />
    <rect x='336' y='6' rx='0' ry='0' width='127' height='139' />
  </ContentLoader>
)

export default SearchLoader
