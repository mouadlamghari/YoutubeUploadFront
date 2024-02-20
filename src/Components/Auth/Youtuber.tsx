import React from 'react'
import { useNavigate } from 'react-router-dom'

const Youtuber = () => {
    const navigate = useNavigate()
    function handelGoogleAuth(){
        const authWindow = window.open("http://localhost:3000/auth/login","_blank","height=500,width=500")
        if(authWindow){
            const ifWindowClosed =  setInterval(()=>{
                if(authWindow?.closed){
                    clearInterval(ifWindowClosed)
                    getUser()
                }
            },1000)
        }
    }

    async function getUser(){
        const headers = new Headers()
        headers.append('Content-Type',"application/json")
       const res = await fetch('http://localhost:3000/auth/user',{credentials:"include",headers})
       const user = await res.json()
       if(user.status==200){
        localStorage.setItem("User",JSON.stringify(user.user))
        navigate("/Youtuber")
       }
    }

  return (
    <div onClick={handelGoogleAuth} className=' cursor-pointer  flex justify-center  items-center p-1 gap-3 rounded-lg border bg-white border-red-200 ' >
        <img className=' w-10  object-contain ' src="/images/logoGoogle.png" alt="Google" />
        SignIn Via Google
    </div>
  )
}

export default Youtuber