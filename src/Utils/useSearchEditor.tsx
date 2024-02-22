import React, { useEffect, useState } from 'react'
import useDebounce from './useDebounce'

const useSearchEditor = () => {
    const [query,setQuery]=useState("")
    const [error,setError]=useState("")
    const [resultat,setResultat]=useState([])
    const [loading,setLoading]=useState(false)
    const queryResultat =  useDebounce(search,1000)
    async function search(){
        try {
            setLoading(true)
            const res = await fetch(`http://localhost:3000/ressource/search?q=${query}`)
            const data = await res.json()
            if(data.status==200){
                console.log(data)
               return  setResultat(data.resultat)
            }
            throw Error(data.message)
        } catch (error) {
            setError(error.message)
        }finally{
            setLoading(false)
        }
    }
    useEffect(()=>{
        if(query.length){
            queryResultat()
        }
    },[query])
  return [resultat,query,setQuery,error,loading]
}

export default useSearchEditor