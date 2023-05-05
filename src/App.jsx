import Characters from './components/Characters'
import Header from './components/Header'

function App () {
  if (
    window.localStorage.theme === 'dark' ||
  (!('theme' in window.localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  return (
    <div className='dark:bg-[#040331]'>
      <Header />
      <Characters />
    </div>
  )
}

export default App
