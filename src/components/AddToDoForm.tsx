import React, { useState} from "react"

interface AddToDoForm{
    onSubmit:(title:string) => void;
}

export default function AddToForm ({onSubmit}:AddToDoForm)
{
const [input,setInput] = useState("");

function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();

    if(!input.trim())
        return;

    onSubmit(input)
    setInput("")

}

    return ( 
    
    <form className="flex"
    onSubmit={handleSubmit}>
    <input
    value={input}
    onChange={(e) => setInput(e.target.value)}
    placeholder="What needs to be done?"
    className="rounded-s-md grow border border-gray p-2"/>
    <button type="submit"
    className="w-16 rounded-e-md bg-slate-800 text-fuchsia-50 hover:bg-slate-600">Add</button>
    </form>
    
)}