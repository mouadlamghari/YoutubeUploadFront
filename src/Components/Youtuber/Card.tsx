import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
const Card = ({bg,title,icone,custom}) => {
    const navigate =useNavigate()
    const redirect = ()=> navigate(title)
  return (
    <div onClick={redirect} className={` cursor-pointer flex justify-between bg-gray-100 p-5 rounded-md  border-4 border-gray-100 bg-[${bg}] ${custom} `} >
        {icone}
        <h1 className=' flex items-end' > {title} </h1>
    </div>
  )
}

export default Card