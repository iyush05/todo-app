import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editing, setEditing] = useState(false);

const handleClick = () => {
  if(inputValue.trim() !== '') {
    const newTodo = [...todos, inputValue];
  setInputValue('');
  setTodos(newTodo);
  }
}

const handleDelete = (index) => {
  const newTodos = [...todos];
  newTodos.splice(index, 1);
  setTodos(newTodos);
}

const handleEdit = (index) => {

}
  return (
    <>
      <h1>Todos</h1>
      <input type="text" value={inputValue} placeholder='Enter todo' onChange={(e) => {setInputValue(e.target.value);}}/>
      <button onClick={handleClick}>Add todo</button>
      <div className='padding-top: 50px; padding-right: 30px; padding-bottom: 50px; padding-left: 80px;'> 
        {todos.map((todo, index) => (
          <div key={index}> {todo}
          <button onClick={handleDelete}>Mark as done</button>
          <button onClick={handleEdit}>Edit</button>
          
          </div>
        ))}
      </div>
    </>
  )
}

export default App
