import React,{useState} from 'react'
import './App.css';
import TodoList from './TodoList';


function App() {
  const [task, setTask]  =useState('');
  const [todos,SetTodos] = useState([]);
  const onChnageEvent = e => {
    setTask(e.target.value)
  }
  const submitHandler = e => {
    e.preventDefault();
    const newTodos = [...todos,task];
    SetTodos(newTodos);
    setTask("");
  }


  const deleteHandler  = (indexValue) => {
   const newTodos =  todos.filter((todos,index) => index !== indexValue);
    SetTodos(newTodos);
  }
  return (
    <div className='container'>
      <div className='card'>
        <center>
        <form onSubmit={submitHandler}>
          <h1>Todo Management Application</h1>
          <input type='text' name='task' value={task} onChange={onChnageEvent}/> &nbsp;&nbsp;  
          <input type='submit' name='Add' value= "Add"/>

        </form>
        <TodoList todoslist = {todos} deleteHandler = {deleteHandler}/>
        
        </center>
        
      </div>
    </div>
  );
}

export default App;
