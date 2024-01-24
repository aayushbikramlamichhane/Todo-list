import React, { useState } from 'react'

const ToDoLIst = () => {
    const [tasks,settasks] = useState([]);
    const [newTask,setnewTasks] = useState("");

    function handleInputChange(event){
        setnewTasks(event.target.value);
    }
    function addTask(){

    }
    function deleteTask(index){

    }
    function moveTaskUp(index){

    }
    function moveTaskDown(index){

    }


  return (
    <div className='to-do-list'>
        <h1>Todo List</h1>
        <div>
            <input type='text'placeholder='Enter the task...' 
            value={newTask}
            onChange={handleInputChange}/>
        </div>
    </div>
  );
}

export default ToDoLIst