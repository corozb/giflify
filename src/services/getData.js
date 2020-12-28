import { API_URL, API_KEY } from './settings'

const getData = async (keyword, page = 0, limit = 15) => {
  const apiUrl = `${API_URL}/gifs/search?api_key=${API_KEY}=${keyword}g&limit=${limit}&offset=${
    page * limit
  }&rating=g&lang=en`

  const response = await fetch(apiUrl)
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
