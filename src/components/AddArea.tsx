import { useState, KeyboardEvent } from "react"

type Props = {
    onEnter: (taskName: string) => void
}

export const AddArea = ({onEnter}: Props) => {

    const [inputText, setInputText] = useState('')

    const handleKeyUp = (e: KeyboardEvent) => {
        if (e.code === 'Enter' && inputText !== ''){
            onEnter(inputText)
            setInputText('')
        }
    }

    return (<div className="border bg-gradient-to-r from-gray-600 to-gray-400 rounded-2xl p-5 mt-7 border-white mb-7 flex items-center">
    <div className="image mr-5">➕</div>
    <input className="border-0 bg-transparent outline-0 text-white text-lg flex-1"
    type="text"
    placeholder="Add a new task"
    value={inputText}
    onChange={e=>setInputText(e.target.value)}
    onKeyUp={handleKeyUp}
     />

    </div>)
}