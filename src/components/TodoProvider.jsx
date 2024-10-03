import { useState } from 'react'
import TodoContext from './TodoContext';

const TodoProvider = ({ children }) => {
    const [inputValue, setInputValue] = useState(''); // Store input value
    const [tasks, setTasks] = useState([]); // Store the list of tasks
  return (
    <div>
    <TodoContext.Provider value={{ inputValue, setInputValue, tasks, setTasks }}>
      {children}
    </TodoContext.Provider>
    </div>
  )
}

export default TodoProvider