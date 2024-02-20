import React from 'react'
import UseGetListChannel from '../../Utils/UseGetListChannel'

const ListVideo = () => {
    const [channels,error,loading]=UseGetListChannel()
    console.log(channels,error,loading)
  return (
    <div>

    </div>
  )
}

export default ListVideo