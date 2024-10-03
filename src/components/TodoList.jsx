// TaskList.jsx
import { useContext} from 'react';
import TodoContext from './TodoContext';
import ListGroup from 'react-bootstrap/ListGroup';

function TodoList() {
  
  const { tasks } = useContext(TodoContext);

  return (
    <ListGroup as="ol" numbered style={{marginTop: '20px'}}>
      {tasks.map((task, index) => (
        <ListGroup.Item as="li" key={index} style={{width: '360px',margin: '0 auto',background:'#333',color: '#fff'}}>
          {task}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default TodoList;
