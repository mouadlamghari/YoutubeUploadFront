import React from 'react'
import Avatar from './Avatar'
import User from '../../Icon/User'

const Item = ({name,_id,lastname,email,mine,createdAt}) => {
    const date = new Date(createdAt)
    const format = ` ${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} `
    const invite = async()=>{  
        const headers = new Headers()
        headers.append("Content-Type","application/json")  
        const request = await fetch('http://localhost:3000/Editors/invite',{headers,body:JSON.stringify({EditorId:_id}),credentials:"include",method:"POST"})
        const response = await request.json()
        console.log(response)
    }
    
  return (
    <div className='flex justify-between bg-gray-100 p-2 rounded-lg ' >
        <div className=' items-center flex gap-3' >
        <Avatar avatar={null} name={name} lastname={lastname}  />
        <div className=' flex flex-col ' >
            <span>{name}</span>
            <span>{lastname}</span>
        </div>
        </div>

        <div className=' flex flex-col  justify-between ' >
        { !mine ? <button onClick={invite} className='flex items-center text-white py-1 px-3 bg-red-500 rounded-lg mb-2 ' >
            <User style={"w-4 h-4"}/>
            Invite
            </button>
        : <button className='flex items-center text-white py-1 px-3 bg-green-300 rounded-lg mb-2' >related</button>    
        }
        {format}
        </div>
    </div>
  )
}

export default Item