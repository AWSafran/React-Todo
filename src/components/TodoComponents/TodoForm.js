import React from 'react';

const TodoForm = props =>{
    return(
        <form className="entryForm">
            <input  
                type="text"
                onChange={props.retrieveInput}
                value={props.task}
            />
            <button onClick={props.updateList}>Submit!</button>
            <button>Clear Deleted!</button>
        </form>
    )
}

export default TodoForm;