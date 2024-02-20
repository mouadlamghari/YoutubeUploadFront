import React from 'react'

const Search = () => {
  return (
    <div className=' gap-2 flex items-center bg-gray-200 rounded-lg p-1  ' >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
        <input  placeholder='search...' className=' outline-none  bg-transparent ' type="text" />
    </div>
  )
}

export default Search