import { API_URL, API_KEY } from './settings'

const getData = async (keyword, limit = 25) => {
  const apiUrl = `${API_URL}/gifs/search?api_key=${API_KEY}=${keyword}g&limit=${limit}&offset=0&rating=g&lang=en`

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
