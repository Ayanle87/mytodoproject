import { Todo } from "../types/todos";
import  {Trash2} from "lucide-react";

interface TodoItemsProbs 
{
    todo:Todo
    onCompletedChange: (id: number, completed:boolean)=> void; 
    onDelete:(id:number) => void;
}

export default function TodoItem ({todo,onCompletedChange,onDelete,}:TodoItemsProbs) {
    return (
    <div className="flex items-center gap-2">
<label className="flex items-center gap-2 border rounded-md p-2 border-blue-200 bg-white hover:bg-slate-300 grow" >
    <input type="checkbox"
    checked={todo.completed}
    onChange={(e)=>onCompletedChange(todo.id, e.target.checked)}
    className="scale-125"/>

    <span className={todo.completed ? "line-through text-gray-400" : ""}>{todo.title}</span>
     </label>
     <button
     className="p-2"
     onClick={()=> onDelete(todo.id)}
     ><Trash2 size={20} className="text-grey-500"/></button>
     </div>
    )
}