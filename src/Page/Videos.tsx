import React from 'react'
import ListVideo from '../Components/Videos/ListVideo'

const Videos = () => {
  return (
    <div>
        <h1 className=' font-bold text-lg my-5 '>
          Uploaded Videos
        </h1>
        <ListVideo/>
    </div>
  )
}

export default Videos