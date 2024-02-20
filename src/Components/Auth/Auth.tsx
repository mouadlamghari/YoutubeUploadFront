import React, { useState } from 'react'
import Header from './Header'
import ActiveForm from './ActiveForm'

const AuthForm = () => {
  const [active,setActive]=useState(1)
  const toogle=(id)=>{
    console.log(id)
      setActive(id)
  }
  return (
    <div className='  p-5 w-[700px] sm:w-80 md:w-96  bg-gray-50  shadow-sm rounded-md ' >
        <Header toogle={toogle} active={active} />
        <ActiveForm active={active} />
    </div>
  )
}

export default AuthForm