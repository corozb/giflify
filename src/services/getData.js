const getData = async (keyword = 'dog') => {
  const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=RAJ4hOa4GtjUuQ9Pl2iYVIKk48lUjFM5&q=${keyword}g&limit=25&offset=0&rating=g&lang=en`
  const response = await fetch(API_URL)
  const { data = [] } = await response.json()
  if (Array.isArray(data)) {
    const gifInfo = data.map((gif) => {
      const { title, id } = gif
      const { url } = gif.images.downsized_medium
      return { title, id, url }
    })
    return gifInfo
  }
}

export default getData
