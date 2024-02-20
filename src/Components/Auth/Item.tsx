import React from 'react'
import { clsx } from 'clsx'
const Item = ({toogle,img,text,active}) => {
  return (
    <div onClick={toogle}  className={clsx(' p-3 rounded-md  border-4 border-red-400 flex flex-col justify-between ',active&&"active")} >
        <img className='h-full object-contain ' src={img} alt="icon" />
        <span className='text-red-600 font-semibold' >{text}</span>
    </div>
  )
}

export default Item