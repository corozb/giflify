import React from 'react'
import ContentLoader from 'react-content-loader'

const MyLoader = (props) => (
  <ContentLoader
    speed={1}
    width={400}
    height={160}
    viewBox='0 0 400 160'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
    {...props}
  >
    <rect x='4' y='21' rx='3' ry='3' width='88' height='11' />
    <rect x='0' y='72' rx='3' ry='3' width='380' height='6' />
    <rect x='2' y='56' rx='3' ry='3' width='134' height='6' />
    <rect x='222' y='55' rx='3' ry='3' width='50' height='6' />
    <rect x='149' y='56' rx='3' ry='3' width='60' height='6' />
    <rect x='286' y='56' rx='3' ry='3' width='134' height='6' />
    <rect x='74' y='87' rx='3' ry='3' width='50' height='6' />
    <rect x='1' y='88' rx='3' ry='3' width='60' height='6' />
    <rect x='138' y='88' rx='3' ry='3' width='134' height='6' />
    <rect x='289' y='88' rx='3' ry='3' width='150' height='6' />
    <rect x='4' y='105' rx='3' ry='3' width='50' height='6' />
    <rect x='68' y='106' rx='3' ry='3' width='134' height='6' />
    <rect x='173' y='141' rx='0' ry='0' width='0' height='1' />
    <rect x='171' y='149' rx='0' ry='0' width='0' height='1' />
    <rect x='171' y='149' rx='0' ry='0' width='1' height='0' />
  </ContentLoader>
)

export default MyLoader
