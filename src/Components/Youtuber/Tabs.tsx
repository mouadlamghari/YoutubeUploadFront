import React from 'react'
import Tab from './Tab'
import Notification from '../../Icon/Notification'
import User from '../../Icon/User'

const Tabs = () => {
  return (
    <div className=' flex gap-2 ' >
        <Tab content={<Notification/>} />
        <Tab content={<User/>} />
    </div>
  )
}

export default Tabs