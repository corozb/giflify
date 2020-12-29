import React, { useState, createContext } from 'react'

const ContextGif = createContext({})

export function ContextGifProvider({ children }) {
  const [gifs, setGifs] = useState([])

  return (
    <ContextGif.Provider value={{ gifs, setGifs }}>
      {children}
    </ContextGif.Provider>
  )
}

export default ContextGif
