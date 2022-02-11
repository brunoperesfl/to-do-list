import { useState } from 'react'
import {Item} from '../types/Item'
type Props = {
    item: Item
}

export const ListItem = ({item}: Props) => {
    const [isChecked, setisChecked] = useState(item.done)

    return (<div className={`${isChecked ? 'flex bg-gradient-to-r from-gray-700 to-gray-600 p-5 rounded-md mb-7 items-center': 'flex bg-gradient-to-r from-gray-800 to-gray-500 p-5 rounded-md mb-7 items-center'}`}>

        <input 
         checked={isChecked}
         onChange={e=>setisChecked(e.target.checked)} 
         className='mr-4 w-6 h-6'
         type="checkbox" />

        <label className={`${isChecked ? 'line-through text-green-500': 'no-underline text-red-600 font-semibold'}`}>{item.name}</label>
    </div>)
}