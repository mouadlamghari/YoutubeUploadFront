const VideoCard = (data) => {
  return (
    <div className=" bg-slate-100 rounded-md  " >
        <img  className=" rounded-lg h-40 w-full " src="/images/9018663.jpg" alt="Video" />
        <div className=" p-3 "  >
        <h2 className=" font-semibold text-lg " > {data.title} </h2>
        <p className="my-3" > {data.description.slice(0,25)} {data.description.length> 25 && "..."} </p>
        <div className=" flex justify-between " >
            <span className={` flex gap-1 w-fit rounded-full items-center  text-white  px-2  ${data.privacyStatus=="public"?"bg-green-600":"bg-red-600"} `} >
                 <span className=" bg-white opacity-45 w-3  h-3    rounded-full" ></span>  
                 <span>{data.privacyStatus}</span> 
            </span>

            <div className=" items-center border-2 cursor-pointer border-red-600 px-1 rounded-full  flex gap-1 " >
                <span>
                    view in 
                </span>
                <img className=" w-7 " src="/images/youtube.png" alt="" />
            </div>

        </div>

        </div>
    </div>
  )
}

export default VideoCard