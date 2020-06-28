import React,{useState,useRef,useEffect} from 'react';
import './App.css';
import TodoList from './TodoList'
import {v4 as uuidv4} from 'uuid'

function App() {
  const [todos,setTodos] =  useState([{id:uuidv4(),name:'todo 1',complete:true}])
  const LOCAL_STORAGE_KEY = 'todosApp.todos'
  const todoNameRef =useRef()


  useEffect(() => {
    
  const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  if(storedTodos) setTodos(storedTodos)
  }, [])

  //useeffects hooks
useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(todos))
}, [todos])

function toggleTodo(id){
  const newTodos = [...todos]
  const todo = newTodos.find(todo => todo.id === id)
  todo.complete = !todo.complete
  setTodos(newTodos)
}

  function addTodo(e){

const name= todoNameRef.current.value

if(name === '')return 
setTodos(prevTodos => {
  return [...prevTodos,{id:1,name:name,complete:false}]
})

}

  function clearTodos()
{
  const newTodos = todos.filter(todo =>!todo.complete)
  setTodos(newTodos)
}  return (
    <div>   
    <TodoList todos={todos} toggleTodo={toggleTodo} />
    
    <input ref={todoNameRef} type="text"></input>
    <button onClick={addTodo}>Add Todo</button>
    <button onClick={clearTodos}>Clear</button>
  <div>{todos.filter(todo => !todo.complete).length}</div>
</div>
  );
}

export default App;
