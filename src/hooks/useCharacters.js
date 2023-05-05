import { useEffect, useState } from 'react'
const useCharacters = url => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    getCharacters(url)
  }, [url])

  const getCharacters = async (url) => {
    const res = await fetch(url)
    const { results } = await res.json()
    setCharacters(results)
  }
  return characters
}
export default useCharacters
