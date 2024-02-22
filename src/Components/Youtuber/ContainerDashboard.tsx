import Actions from "../../Icon/Actions"
import Channel from "../../Icon/Channel"
import Editor from "../../Icon/Editor"
import Notification from "../../Icon/Notification"
import Statistisue from "../../Icon/Statistisue"
import Videos from "../../Icon/Videos"
import Card from "./Card"

// grid-column: 1/3;
//   grid-row: 1/3;
const ContainerDashboard = () => {
    const cards = [
        {bg:"#e83545",title:"Videos",icone:<Videos/>,custom:" row-span-2 col-span-2"},
        {bg:"blue",title:"Editors",icone:<Editor/>,},
        {bg:"green",title:"Channels",icone:<Channel/>},
        {bg:"yellow",title:"Actions",icone:<Actions/>,custom:"col-span-2"},
        {bg:"yellow",title:"Statique",icone:<Statistisue/>,custom:"col-span-4"},
    ]
  return (
    <div className="grid gap-4  p-2 grid-cols-4 grid-rows-3" >
        {cards.map(e=><Card {...e} />)}
    </div>
  )
}

export default ContainerDashboard