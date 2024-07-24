import { dummyData } from "./data/todos";
import { useEffect, useState } from "react";
import AddToForm from "./components/AddToDoForm";
import TodoList from "./TodoList";
import TodoSummary from "./components/TodoSummary";
import { Todo } from "./types/todos";

function App() {

  const [todos, setTodos] = useState (()=> {
    const saveTodos : Todo[] = JSON.parse (
      localStorage.getItem("todos" ) || "[]"
    );
    return saveTodos.length > 0 ? saveTodos : dummyData;
  });

  useEffect (() => {
localStorage.setItem("todos", JSON.stringify(todos));
  },
[todos])

function setTodoCompleted(id: number, completed: boolean) {
  setTodos((prevState) =>
    prevState.map((todo) =>
      todo.id === id ? { ...todo, completed } : todo
    )
  );
}

function addTodo(title:string){
  setTodos(prevState => [
    {id: Date.now(),
      title,
      completed: false,
    },
    ... prevState,
  ]  );

}

function deleteTodo (id:number){
setTodos(prevState => prevState.filter(todo => todo.id !== id))
}

function deleteAllCompleted ()
{
  setTodos(prevState => prevState.filter (todo => !todo.completed))
}
return (
   <main className="py-10 h-screen space-y-6 overflow-y-auto" >
    <h1 className="font-bold text-center font-mono text-3xl"> Your Todos</h1>
  <div className="max-w-lg mx-auto py-7 px-7 bg-slate-100 rounded-md p-5 space-y-6">
    <AddToForm
    onSubmit={addTodo}/>
    <TodoList
    todos={todos}
    onCompletedChange={setTodoCompleted}
    onDelete={deleteTodo}
    />
    
     
  </div>
  <TodoSummary
  todos = {todos}
  deleteAllCompleted = {deleteAllCompleted}
/>
   </main>
  );
}
  
export default App
