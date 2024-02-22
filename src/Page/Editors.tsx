import { useState } from "react"
import IvitationModal from "../Components/Editors/IvitationModal"
import ListEditors from "../Components/Editors/ListEditors"

const Editors = () => {
  const [open,setOpen]=useState(false)
  function close(){
    setOpen(false)
  }
  function openModal(){
    setOpen(true)
  }
  return (
    <div>
      <div className=" flex items-center justify-between">
        <h1 className=" my-5 font-bold text-lg" >
          Editors</h1>
          <button onClick={openModal} className=" bg-red-500 rounded-md px-4 text-white py-1 " >Invite</button>
      </div>
        <ListEditors/>
        <IvitationModal isOpen={open} close={close} />
    </div>
  )
}

export default Editors