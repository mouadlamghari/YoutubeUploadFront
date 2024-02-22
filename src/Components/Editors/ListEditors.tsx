import React from 'react'
import useGetEditors from '../../Utils/useGetEditors'
import CardEditor from './CardEditor'

const ListEditors = () => {
    const [Editors,loading,error]=useGetEditors()
    
  return (
    <div className='grid grid-cols-3' >
        { Editors && Editors.map((editor)=><CardEditor {...editor} />)}
    </div>
  )
}

export default ListEditors