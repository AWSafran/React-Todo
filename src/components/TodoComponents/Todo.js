import React from 'react';

const Todo = props =>{
    console.log(props.listItem);
    return <li>{props.listItem.task}</li>
}

export default Todo;