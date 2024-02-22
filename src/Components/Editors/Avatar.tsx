function Avatar({avatar,name,lastname,style=""}){
    return  !avatar 
        ?
        <span className={' uppercase text-white justify-center items-center flex w-10 h-10 rounded-full bg-red-600 font-bold text-xl '+style} >
            {name.slice(0,1)}
            {lastname.slice(0,1)}
        </span>
        :
        <img src="" alt="" />
}
export default Avatar