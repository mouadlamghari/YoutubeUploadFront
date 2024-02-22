import { createPortal } from "react-dom"
import SearchComponent from "./SearchComponent";
import ResultatSearch from "./ResultatSearch";
import useSearchEditor from "../../Utils/useSearchEditor";

const IvitationModal = ({isOpen,close}) => {
    if(!isOpen) return null; 
  return (
    createPortal(
        <div className=" grid place-content-center p-2 place-items-center   w-full h-full absolute top-0 left-0  bg-slate-200/60 " >
            <Model/>
        </div>
        ,document.querySelector('#root'))
  )
}

function Model(){
    const [resultat,query,setQuery,error,loading]=useSearchEditor();
    function search(e:Event){
        const target = e.target as HTMLInputElement
        console.log(target)
        setQuery(target?.value)
    }
    return <div className=" bg-white p-3 rounded-md w-[500px] " >
        <div className=" flex flex-col gap-3 ">
            <SearchComponent onChange={search} />
            <ResultatSearch query={query} loading={loading} resultat={resultat} />
        </div>
    </div>
}

export default IvitationModal