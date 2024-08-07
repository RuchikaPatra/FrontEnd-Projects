// import React, { useState } from 'react';

// function Todolist() {
//     const [initialValue, setInitialValue] = useState('')
//     const [tasks, setTasks] = useState([])
//     const [isEditing , setIsEditing] =  useState(false)
//     const [editIndex , setEditIndex] = useState(null)

//     function handleChangeInput(e) {
//         setInitialValue(e.target.value);
//     }

//     function addTask() {
//         if (initialValue.trim() !== '') {
//             if(isEditing){
//                 const updatedtask = tasks.map((element,index)=>index===editIndex ? {...element, text:initialValue}: element)
//                 setTasks(updatedtask)
//                 setEditIndex(null)
//                 setIsEditing(false)
//             }
//             else{
//                 setTasks(tasks => [...tasks, {text:initialValue , completed: false}])
//             }
//             setInitialValue("")
//         }

//     }

//     function deleteTask(index) {
//         const updatedtask = tasks.filter((element , i)=> i !== index)
//         setTasks(updatedtask)
//     }

//     function updateTask(index) {
//         setInitialValue(tasks[index].text)
//         setIsEditing(true)
//         setEditIndex(index)
//     }

//     function toggleTask(index) {
//         const updatedtask = tasks.map((task , i) => i===index ? {...task, completed: !task.completed} : task)
//         setTasks(updatedtask)
//     }

//     return (
//         <div>
//             <h1>TO-DO-LIST</h1>
//             <div>
//                 <input type='text' placeholder='Enter any task..' value={initialValue} onChange={handleChangeInput} />
//                 <button className='add-button' onClick={addTask}>{isEditing ? 'Update':'Add'}</button>
//             </div>
//             <ol>
//                 {tasks.map((task, index) =>
//                     <li key={index}>
//                         <span className={`task-text ${task.completed ? 'task-completed':''}`}>
//                             {task.text}
//                         </span>
//                         <button className='delete-button' onClick={() => deleteTask(index)}>Delete</button>
//                         <button className='update-button' onClick={() => updateTask(index)}>Update</button>
//                         <button className='toggle-button' onClick={() => toggleTask(index)}>Toggle</button>
//                     </li>)}
//             </ol>
//         </div>
//     )
// }

// export default Todolist;

import React, { useState } from 'react';


function Todolist() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputText.trim() !== '') {
      if (editIndex !== null) {
        const updatedTodos = [...todos];
        updatedTodos[editIndex] = { text: inputText, isTextRed: false };
        setTodos(updatedTodos);
        setEditIndex(null);
      } else {
        setTodos([...todos, { text: inputText, isTextRed: false }]);
      }
      setInputText('');
    }
  };

  const handleUpdateTodo = (index) => {
    setInputText(todos[index].text);
    setEditIndex(index);
    const updatedTodos = [...todos];
    updatedTodos[index].isTextRed = false;
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const handleToggleRed = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].isTextRed = !updatedTodos[index].isTextRed;
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <h1>To-Do-List</h1>
      
      <div className="container">
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Things to Do"
          className="input"
        />
        <button className="todo-button" onClick={handleAddTodo}>
          {editIndex !== null ? 'Update' : 'Add'}
        </button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <span style={{ color: todo.isTextRed ? 'red' : 'black' }}>{todo.text}</span>
            <button className="update-button" onClick={() => handleUpdateTodo(index)}>Update</button>
            <button className="toggle-button" onClick={() => handleToggleRed(index)}>Toggle</button>
            <button className="delete-button" onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todolist;
