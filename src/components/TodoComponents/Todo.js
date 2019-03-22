import React from 'react';

const Todo = props =>{
    //console.log(props.listItem);
    return <li onClick={props.markComplete}>{props.listItem.task}</li>
}

export default Todo;