import React from 'react';

function Task(props) {
    const priorityColor = 
        props.priority === "High" ? "red" :
        props.priority === "Medium" ? "gold" :
        props.priority === "Low" ? "green" :
        'none';


    return  (
        <div className="card" style={{backgroundColor: props.done ? 'lightgray' : '#5bb4c4'}}>
            <p className="title">{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p className="description">{props.description}</p>
            <p className="priority" style={{backgroundColor: priorityColor}}>{props.priority}</p>
            <button onClick={props.markDone} className="doneButton">Done</button>
            <button onClick={props.deleteTask} className="deleteButton">Delete</button>
        </div>
    )
}

export default Task;