import React from 'react'
import Search from '../../Icon/Search'

const SearchComponent = (data) => {
  return (
    <div className=' flex  bg-slate-100 gap-2 rounded-md p-2 ' >
         <Search/>
        <input {...data} className=' flex-1 bg-transparent outline-none ' placeholder='Search editor ...' type="text" />
    </div>
  )
}

export default SearchComponent