
import './App.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import TodoProvider from './components/TodoProvider'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
      <div>
       <TodoProvider>
        <h1>Your <b>To Do</b> List</h1>
        <hr style={{width:'230px', margin:'10px auto 30px',border:'2px solid #333'}}/>
        <TodoInput/>
        <TodoList/>
       </TodoProvider>
      </div>
  )
}

export default App
