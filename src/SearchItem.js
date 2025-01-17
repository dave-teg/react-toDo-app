import React from 'react'

const SearchItem = ({search, setSearch}) => {
  return (
    <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
      <label className='offscreen' htmlFor="search">Search</label>
      <input 
        type="text"
        role='search'
        placeholder='Search items'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  )
}

export default SearchItem