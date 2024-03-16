const API = 'https://dragonball-api.com/api/characters/';

const getData = async (id) => {
  const apiURL = id ? `${API}${id}` : API;
  try {
    const response = await fetch(apiURL)
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Fetch Error', error)
  }
}

export default getData