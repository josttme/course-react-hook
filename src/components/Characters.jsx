import { useCallback, useMemo, useReducer, useRef, useState } from 'react'
import Search from './Search'
import useCharacters from '../hooks/useCharacters'

const initialState = {
  favorites: []
}
const API = 'https://rickandmortyapi.com/api/character'

const favoritesReducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      }
    default:
      return state
  }
}
export default function Characters () {
  const [state, dispatch] = useReducer(favoritesReducer, initialState)
  const [search, setSearch] = useState('')
  const searchInput = useRef(null)
  const characters = useCharacters(API)

  const filteredCharacters = useMemo(() =>
    characters.filter(character => {
      return character.name.toLowerCase().includes(search.toLowerCase())
    }),
  [characters, search]
  )
  const handleSearch = useCallback(() => {
    setSearch(searchInput.current.value)
  }, [])

  const handleFavorite = favorites => {
    dispatch({ type: 'add', payload: favorites })
  }

  if (!characters.length) {
    return <h2>No characters found</h2>
  }
  /*  const handleSearch = () => {
    setSearch(searchInput.current.value)
  } */

  /*   const filteredCharacters = characters.filter(character => {
    return character.name.toLowerCase().includes(search.toLowerCase())
  }) */

  const favorites = state.favorites.map(character => {
    return (
      <div key={character.id} className='w-full  max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-[#0a1695]'>
        <img src={character.image} alt={character.name} className='object-cover w-full h-56' />

        <div className='py-5 text-center dark:text-white/80 text-2xl '>
          <h2>{character.name}</h2>
          <button type='button' onClick={() => handleFavorite(character)} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            Add to favorites
          </button>
        </div>
      </div>
    )
  })
  const characterList = filteredCharacters.map(character => {
    return (
      <div key={character.id} className='w-full  max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-[#0a1695]'>
        <img src={character.image} alt={character.name} className='object-cover w-full h-56' />

        <div className='py-5 text-center dark:text-white/80 text-2xl '>
          <h2>{character.name}</h2>
          <button type='button' onClick={() => handleFavorite(character)} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            Add to favorites
          </button>
        </div>
      </div>
    )
  })

  return (
    <>
      <Search search={search} handleSearch={handleSearch} searchInput={searchInput} />
      <div className='grid justify-items-center grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {favorites}
        {characterList}
      </div>
    </>
  )
}
