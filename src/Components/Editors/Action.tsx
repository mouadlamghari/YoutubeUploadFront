import React from 'react'

const Action = ({data}) => {
    console.log({data})
  return (
    <div className=' bg-gray-100 p-1 rounded-md' >
        <div className=' bg-blue-700 text-white my-2 w-fit rounded-lg px-1 ' >#{data._id} </div>
    <div className=' flex gap-2 items-center' >
        <span className={` px-2 py-1 text-white rounded-xl ${data.action=="upload"? "bg-blue-400":"bg-yellow-300"} `} > {data.action} </span>
        <span  className={` px-2 py-1 text-white rounded-xl ${data.approved?"bg-green-400":"bg-red-400"} `} > {data.approved? "approved" : "not approved"} {!data?.approved && data.raison} </span>
        {data.approved && <div className=' cursor-pointer flex gap-2  px-2 py-1 text-red-700 rounded-xl border-2 border-red-600 ' > view on <img  className='w-6' src="/images/youtube.png" alt="" /> </div>}
    </div>
    </div>
  )
}

export default Action