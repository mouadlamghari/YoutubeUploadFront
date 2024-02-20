import { useNavigate } from 'react-router-dom'
import { useSignUp } from '../../Utils/Context'
import { getUser } from '../../Utils/GetUser'
import Input from '../Input'
import toast from 'react-hot-toast'

const Editor = () => {
    const [state,setState]=useSignUp()
    const navigate = useNavigate()

    function handelInputChange(e :Event ,label:string){
        const target  =e.target as HTMLInputElement
        const {value}=target
        setState(prev=>({...prev,[label]:value}))
    }

    function handelPasswordChange(e:Event){
        const target  =e.target as HTMLInputElement
        const {value}=target
        setState(prev=>({...prev,password:value}))
    }

    async function handelSignUp(){
        const headers = new Headers()
        headers.append('Content-Type',"application/json")
        headers.append('Accept',"application/json")
       const rerquest = await fetch('http://localhost:3000/Editors/auth',{
            method:"POST",
            headers,
            credentials:"include",
            body:JSON.stringify(state)
        })
        const response = await rerquest.json()
        if(response.status==200){
            getUser()
            .then(res=>res && navigate('/Editor'))
        }
        else{
             Object.values(response.errors).map((message)=>toast.error(message))
         //   Object.entries(response.errors).map(e=>console.log(e))
        }
    }
  return (
    <div>
        <Input type={"text"} text={"username"} onChange={(e:Event)=>handelInputChange(e,'username')}  />
        <Input type={"text"} text={"email"} onChange={(e:Event)=>handelInputChange(e,'email')}  />
        <Input type={"text"} text={"name"} onChange={(e:Event)=>handelInputChange(e,'name')}  />
        <Input type={"text"} text={"lastname"} onChange={(e:Event)=>handelInputChange(e,'lastname')}  />
        <Input type={"password"} text={"password"} onChange={handelPasswordChange}  />
        <button onClick={handelSignUp} className=' bg-red-600 rounded-md text-white px-6 py-1 mt-3 ' >Sign up</button>
    </div>
  )
}

export default Editor