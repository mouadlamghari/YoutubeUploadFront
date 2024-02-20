import React, { useEffect } from 'react'

const Success = () => {
    useEffect(()=>{
        setTimeout(()=>window.close(),3000)
    },[])
  return (
    <div className=' h-[100vh] w-[100vw] p-5 grid place-items-center place-content-center gap-3 ' >
        <img className='w-24 object-contain ' src="/images/check.png" alt="" />   
        <p>You are looged in successfully</p>    
    </div>
  )
}

export default Success