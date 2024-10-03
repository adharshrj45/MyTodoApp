// InputComponent.jsx
import { useContext,useEffect,useRef } from 'react';
import TodoContext from './TodoContext';

function TodoInput() {
  const inputref=useRef(null);
  const { inputValue, setInputValue, tasks, setTasks } = useContext(TodoContext);

  useEffect(() => {
    inputref.current.focus();
  }, []);

  // Handle input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  

  // Handle adding a new task
  const addTask = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, inputValue]);
      setInputValue('');
      inputref.current.focus();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a new task"
        style={{ padding: '5px', width: '300px' }}
        ref={inputref}
      />
      <button onClick={addTask} style={{ marginLeft: '10px', padding: '5px 10px' }}>
        Add
      </button>
    </div>
  );
}

export default TodoInput;
