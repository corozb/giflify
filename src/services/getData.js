const API_URL =
  'https://api.giphy.com/v1/gifs/search?api_key=RAJ4hOa4GtjUuQ9Pl2iYVIKk48lUjFM5&q=dog&limit=25&offset=0&rating=g&lang=en'

const getData = async () => {
  const response = await fetch(API_URL)
  const { data = [] } = await response.json()
  if (Array.isArray(data)) {
    const gifUrl = data.map((url) => url.images.downsized_medium.url)
    return gifUrl
  }
}

export default getData
