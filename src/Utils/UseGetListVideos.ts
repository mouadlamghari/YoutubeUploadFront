import React, { useEffect, useState } from 'react'

const UseGetListVideos = () => {
    const [channels,setChannels]=useState()
    const [err,setErr]=useState("")
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
        (async()=>{
            try{
                setLoading(true)
                const headers = new Headers()
                headers.append('Content-Type','application/json')
                const req = await fetch('http://localhost:3000/ressource/videos',{headers,credentials:"include"})
                const res = await req.json();
                setChannels(res.data)
            }catch(err){
                setErr(err.message)
            }finally{
                setLoading(false)
            }
        })()
    },[])
  return [channels,err,loading];
}

export default UseGetListVideos