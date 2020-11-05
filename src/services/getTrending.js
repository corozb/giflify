import { API_URL, API_KEY } from './settings'

const getTrending = async () => {
  const apiUrl = `${API_URL}/trending/searches?api_key=${API_KEY}`
  console.log(apiUrl)

  const response = await fetch(apiUrl)
  const { data } = await response.json()
  return data
}

export default getTrending
