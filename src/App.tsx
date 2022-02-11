import { useState } from "react"
import {Item} from './types/Item'
import {ListItem} from './components/ListItem'
import {AddArea} from './components/AddArea'

let container = 'bg-gradient-to-r from-cyan-400 to-blue-900 text-gray-400 min-h-screen'
let area = 'm-auto max-w-screen-lg p-10'
let header = 'm-0 p-0 text-gray-100  text-center border-solid border-gray-100 border-b pb-10 text-4xl'



const App = () => {

  const [list, setList] = useState<Item[]>([
    {id: 1, name: 'Example 1', done: false},
    {id: 2, name: 'Example 2', done: false}
  ])

  const handleAddTask = (taskName: string) => {
    let newList = [...list]
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    })
    setList(newList)
  }

  return(
  <div className={container}>
    <div className={area}>
        <h1 className={header}>
            To-do list
        </h1>

        <AddArea onEnter={handleAddTask} />

        {list.map((item, index)=>(
          <ListItem key={index} item={item}/>
        ))}


    </div>
  </div>)
  }
export default App