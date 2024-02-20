import React from 'react'
import Editor from './Editor'
import Youtuber from './Youtuber'
import SignUpEditorProvider from '../../Utils/Context'

const ActiveForm = ({active}) => {
  return (
    <SignUpEditorProvider>
    <div className=' mt-2 ' >
        <ActiveItem active={active} />
    </div>
    </SignUpEditorProvider>
  )
}

const ActiveItem=({active})=>{
    return active==1 ? <Editor/> : <Youtuber/>
}

export default ActiveForm