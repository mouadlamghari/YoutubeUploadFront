import React from 'react'
import ContainerDashboard from '../Components/Youtuber/ContainerDashboard'

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem('User'))
  console.log(user)
  return (
    <div>
        <h1 className=' my-4 ' >Hello {user.name} {user.lastName} </h1>
        <ContainerDashboard/>
    </div>
  )
}

export default Dashboard