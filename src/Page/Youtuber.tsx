import React from 'react'
import NavbarYoutuber from '../Components/Youtuber/NavbarYoutuber'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import Videos from './Videos'
import Editors from './Editors'

const Youtuber = () => {
  return (
    <div className=' m-auto max-sm:w-[90%] max-md:w-[80%] max-lg:w-[70%] lg:w-[65%] p-2' >
        <NavbarYoutuber/>
        <Routes>
            <Route index element={<Dashboard/>} />
            <Route path='/Videos' element={<Videos/>} />
            <Route path='/Editors' element={<Editors/>} />
        </Routes>
    </div>
  )
}

export default Youtuber