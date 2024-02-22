import React from 'react'

import Actions  from "../../Icon/Actions"
import Items from '../../Icon/Items'
import Action from './Action'
const ActionsSection = ({items}) => {
    console.log({items})
  return (
    <div className='  ' >
        <h1 className=' my-2 flex items-center gap-2' >  <Items/> Actions</h1>
        <div className=' h-60 overflow-y-scroll ' >
        {items.map(action=>(<Action data={action} />))}
        </div>
    </div>
  )
}

export default ActionsSection