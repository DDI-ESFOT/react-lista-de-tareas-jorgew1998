import {useState} from 'react';
import './TodoList.css';

const TodoList = () => {
  const [todoList, setTodoList ] = useState([]);
  const [completeChores, setCompleteChores] = useState([]);

  const handleAddChore = () => {
    const chor = document.querySelector( '#task' ).value;
    if(chor !== "") {
        setTodoList( prevState => [ ...prevState, chor ] );
        document.querySelector( '#task' ).value = '';
    } else {
        alert('Ingrese un valor correcto');
    }
    
  };

  const handleDeleteChore = ( index ) => {
    setTodoList( ( prevState ) => {
      return prevState.filter( ( task, i ) => i !== index );
    } );
  };

  const handleCompleteChore = ( index ) => {
    setCompleteChores( ( prevState ) => [...prevState, todoList[ index ]]);
    handleDeleteChore( index );
  };

  return (
    <>
      <div>
        <label htmlFor='task'></label>
        <input type='text' id='task' />
        <button onClick={ handleAddChore }>Añadir tarea</button>
      </div>
      <h1>Tareas pendientes ({ todoList.length })</h1>
      <table>
        <thead>
        <tr><th>Nombre Tarea</th>
          <th>Eliminacion Tarea</th>
          <th>Cambio de Estado Tarea</th></tr>
        </thead>
        <tbody>
        {
          todoList.map( ( task, index ) => (
              <tr key={ index }>
                <td>{ task }</td>
                <td><button onClick={ () => handleDeleteChore( index ) }>Eliminar</button></td>
                <td> <button onClick={ () => handleCompleteChore( index ) }>Completada</button> </td>
              </tr>
            )
          )
        }
        </tbody>
      </table>

      <h1>Tareas completadas ({ completeChores.length })</h1>
      <table>
        <thead>
        <tr><th>Nombre</th></tr>
        </thead>
        <tbody>
        {completeChores.map( ( task, index ) => (
              <tr key={ index }>
                <td>{ task }</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </>
  );
};

export default TodoList;
