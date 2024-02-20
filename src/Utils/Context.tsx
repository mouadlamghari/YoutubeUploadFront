import { ReactNode, createContext, useContext, useState } from "react";
interface SignUpContextType {
    email: string;
    name: string;
    password: string;
    lastname: string;
  }
  interface SignUpEditorProviderProps {
    children: ReactNode;
}
const initiale :SignUpContextType = {email:"",name:"",password:"",lastname:""}
const SignUpContext = createContext<SignUpContextType | null>(initiale)
const SignUpEditorProvider=({children}:SignUpEditorProviderProps)=>{
    return( <SignUpContext.Provider value={useState(initiale) }>
                 {children}
            </SignUpContext.Provider>)
}
export default SignUpEditorProvider
export const useSignUp =()=>useContext(SignUpContext)




