import React from 'react'
import Item from './Item'

const Header = ({active,toogle}) => {
  const items = [
    {id:1,text:"Editor",img:"/images/editorIcone.png"},
    {id:2,text:"Youtube",img:"/images/Youtuber.png"}
  ]
  return (
    <div className=' flex gap-3 ' >
        {items.map(e=>(<Item img={e.img} text={e.text} key={e.id} active={e.id==active} toogle={()=>toogle(e.id)}  />))}
    </div>
  )
}

export default Header