import { PropTypes } from 'prop-types'

export default function Search ({ search, handleSearch, searchInput }) {
  return (
    <div className='max-w-lg mx-auto'>
      <input
        ref={searchInput}
        type='text'
        value={search}
        onChange={handleSearch}
        placeholder='Search characters'
        className='w-full h-12 p-2 rounded-lg '
      />
    </div>
  )
}
Search.propTypes = {
  search: PropTypes.string,
  handleSearch: PropTypes.func,
  searchInput: PropTypes.object
}
