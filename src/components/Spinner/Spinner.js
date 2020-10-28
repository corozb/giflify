import React from 'react'

import './Spinner.css'

const Spinner = () => {
  return (
    <div className='main__spinner'>
      <div className='cursor-pointer flex justify-center items-center h-16'>
        <div className='bouncingLoader'>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default Spinner
