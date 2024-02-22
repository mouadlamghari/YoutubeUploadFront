import React from 'react'
import Item from './Item'
import Loader from '../Loader'

const ResultatSearch = ({resultat,query,loading}) => {
    
  return (
    <div className=' flex flex-col gap-3 h-96 overflow-y-scroll p-2' >
        {(resultat.length==0 && query.length==0 && !loading ) && <div className=' font-extrabold text-2xl text-gray-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ' > SEARCH FOR SOMTHING </div>}
        {(resultat.length==0 && query.length>0 && !loading) && <div className=' font-extrabold text-2xl text-gray-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ' > NOT FOUND </div>}
        {resultat?.map(e=><Item _id={e._id} name={e.name} createdAt={e.createdAt} lastname={e.lastname} email={e.email} mine={e.min} />)}
    </div>
  )
}

export default ResultatSearch