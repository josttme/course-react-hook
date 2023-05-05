import { useContext, useState } from 'react'
import ThemeContext from '../context/themeContext'

export default function Header () {
  const [darkMode, setDarkMode] = useState(false)
  const color = useContext(ThemeContext)

  const handleDarkMode = () => {
    setDarkMode(!darkMode)
    toggleDarkMode()
  }
  function toggleDarkMode () {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark')
      window.localStorage.theme = 'light'
    } else {
      document.documentElement.classList.add('dark')
      window.localStorage.theme = 'dark'
    }
  }
  const darkModeClass =
    darkMode
      ? 'Dark Mode'
      : 'Light Mode'

  return (
    <>
      <h1 style={{ color }} className='text-center font-bold text-5xl dark:text-white/90'>ReactHooks</h1>
      <div className='flex justify-center mt-5'>
        <button
          className='bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 mb-5 px-4 rounded-full'
          type='button'
          onClick={handleDarkMode}
        >{darkModeClass}
        </button>
      </div>
    </>
  )
}
