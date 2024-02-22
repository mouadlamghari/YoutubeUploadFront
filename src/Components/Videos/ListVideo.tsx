import React from 'react'
import UseGetListVideos from '../../Utils/UseGetListVideos'
import VideoCard from './VideoCard'

const ListVideo = () => {
    const [videos,error,loading]=UseGetListVideos()
    console.log(videos,error,loading)
  return (
    <div className=' grid grid-cols-3 ' >
      {videos?.map(video=> <VideoCard {...video} /> )}
    </div>
  )
}

export default ListVideo