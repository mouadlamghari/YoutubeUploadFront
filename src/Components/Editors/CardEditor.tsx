import React, { useState } from 'react'
import More from '../../Icon/More'
import EditorModal from './EditorModal'
import Avatar from './Avatar'

const CardEditor = (data) => {
    const [open,setOpen]=useState(false)
    const close = ()=>{
        setOpen(false)
    }
    const openModel = ()=>{
        setOpen(true)
    }

  return (
    <div className='flex items-center justify-between' >
        <div className='flex items-center gap-3' >

       <Avatar avatar={data?.picture} name={data?.name} lastname={data?.lastname}  />
       <div className=' flex flex-col justify-between ' >
            <span> {data?.name} </span>
            <span> {data?.lastname} </span>
       </div>
        </div>
       <More onClick={openModel} />
       <EditorModal isOpen={open} close={close} data={data}  />
    </div>
  )
}







export default CardEditor