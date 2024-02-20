import React from 'react'
import Search from './Search'
import Tabs from './Tabs'

const NavbarYoutuber = () => {
  return (
    <div className=' bg-slate-50 rounded-md w-full flex  p-2 justify-between ' >
        <img className=' h-10 object-contain ' src="/images/youtube.png" alt="logo" />
        <Search/>
        <Tabs/>

    </div>
  )
}

export default NavbarYoutuber