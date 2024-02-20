
export async function getUser(){
    const headers = new Headers()
    headers.append('Content-Type',"application/json")
   const res = await fetch('http://localhost:3000/auth/user',{credentials:"include",headers})
   const user = await res.json()
   if(user.status==200){
    localStorage.setItem("User",JSON.stringify(user.user))
    return true
   }
   return false
}