// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = props =>{
    console.log("Made it to TodoList")
    return(
        <ul className="listContainer">
            {props.taskList.map(element =>(
                <Todo listItem={element}/>
            ))}
        </ul>
    )
}

export default TodoList;