import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'
import Avatar from './Avatar';
import Mail from '../../Icon/Mail';
import User from '../../Icon/User';
import Actions from './Actions';

const EditorModal = ({isOpen,close,data}) => {
  
  useEffect(()=>{
   function handelClick(e){
    let modal = document.querySelector('#modal')
     if(isOpen  && !modal.contains(e.target)){
      close()
     }
   }
   document.addEventListener('mousedown',handelClick)
   return ()=>{
     document.removeEventListener('mousedown',handelClick)
   }
  },[isOpen])
    if(!isOpen) return null;
  return (
    createPortal(
        <div className=' flex justify-center items-center bg-gray-200/60 opacity-90 z-40 absolute top-0 left-0 w-full h-full ' >
            <Modal data={data} />
         </div>
        ,document.querySelector('#root'))
  )
}




function Modal({data}){
  let fullname = `${data.name} ${data.lastname} `
    return <div id='modal'  className=' grid  w-[500px] p-5 rounded-md z-50 bg-white ' >
        <Avatar style='w-20 h-20' avatar={null}  name={data.name} lastname={data.lastname} />
        <div className=' flex justify-between my-3 ' >
        <Item icon={<Mail/>} text={data.email} />
        <Item icon={<User/>} text={fullname} />
        </div>
        <Actions items={data.actions} />
    </div>
}

function Item({icon,text}){
    return <div className=' bg-slate-100 p-2 rounded-lg flex items-center gap-3 ' >
      {icon}
      {text}
    </div>
}





export default EditorModal