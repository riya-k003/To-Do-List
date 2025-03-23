import React, {useState} from 'react'

function ToDoList(){
    const [tasks , setTasks] = useState(["Eat Breakfast" , "Take Shower" , "Walk the dog"]);
    const [newTask , setnewTask] = useState("");
    const[completedTasks , setcompletedTasks] = useState({});

    function handleInputChange(event){
        setnewTask(event.target.value);


    }

    function addTask(){
        
        if(newTask.trim() !== ""){
            increasedivheight();
        setTasks(t=>[...t , newTask]);
        setnewTask("");
        }
        
      
    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((_ , i) => i !== index);
        setTasks(updatedTasks);

    }

    function moveTaskUp(index){
        if(index>0){
        const updatedTasks = [...tasks];
        [updatedTasks[index], updatedTasks[index-1]] = [updatedTasks[index - 1], updatedTasks[index]];
        setTasks(updatedTasks);
        }

    }
    function moveTaskDown(index){
        if(index < tasks.length-1){
        const updatedTasks = [...tasks];
        [updatedTasks[index], updatedTasks[index+1]] = [updatedTasks[index+1], updatedTasks[index]];
        setTasks(updatedTasks);
        
        }

    }
    function increasedivheight(){
       const listheight  = document.getElementById('list');
       if(listheight){
        let currentheight = listheight.offsetHeight;
        listheight.style.height = `${currentheight + 50}px`;
       }

    }
    function togglecomplete(index){
        setcompletedTasks((prev) => ({
            ...prev,[index]:!prev[index],
        }))

    }

    return(
        <div id="list" className="to-do-list">
            <h1>To-Do-List</h1>
            <div >
            <input type="text" placeholder="Enter the 😘 Task...." onChange={(handleInputChange)}/>
            <button className="add-task" onClick={addTask}>Add</button>
        </div>
        <ol >
            {tasks.map((task , index)=>(
                <li key={index}>
                    <input className="check" type="checkbox"  checked={completedTasks[index] || false}
                    onChange={() => togglecomplete(index)}/>
                    <span className="text">{task}</span>
                    <button className="Delete" onClick={()=> deleteTask(index)}>🗑️</button>
                    <button className="up" onClick={()=> moveTaskUp(index)}>👆</button>
                    <button className="down" onClick={()=> moveTaskDown(index)}>👇</button>
                </li>
            ))}
        </ol>
        </div>
       
    )

}
export default ToDoList