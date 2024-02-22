import React, { useEffect, useState } from 'react'

const useGetEditors = () => {
    const [error,setError]=useState("");
    const [loading,setLoading]=useState(false);
    const [editors,setEditors]=useState([])
    useEffect(()=>{
        (async()=>{
            try {   
                setLoading(true)    
                const headers = new Headers();
                headers.append('Content-Type',"application/json")
                const req = await fetch('http://localhost:3000/ressource/editors',headers)
                const  res = await req.json()
                console.log(res.data)
                if(res.status==200){
                    setEditors(res.data)
                }
                else{
                    throw Error(res.message)
                }
            } catch (error) {
                setError(error.message)
            }finally{
                setLoading(false)
            }
        })()
    },[])
  return [editors,loading,error]
}

export default useGetEditors