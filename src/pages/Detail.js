import React from 'react'

const Detail = ({ params }) => {
  const { id } = params
  console.log(id)
  return (
    <div>
      <h1>id: {id}</h1>
    </div>
  )
}

export default Detail
