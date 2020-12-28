import { API_URL, API_KEY } from './settings'

const getTrending = async () => {
  const apiUrl = `${API_URL}/trending/searches?api_key=${API_KEY}`

  const response = await fetch(apiUrl)
  const { data } = await response.json()
  return data
}

export default getTrending
