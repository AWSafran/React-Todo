import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const toDo = []

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor(){
    super();

    this.state = {
      toDoList: toDo,
      task: ''
    }
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  retrieveInput = event =>{
    //console.log("Retrieving Input ", event.target.value);
    this.setState({
      task: event.target.value
    })
  }

  updateList = event =>{
    event.preventDefault();
    const newItem = {
      task: this.state.task,
      id: Date.now(),
      completed: false
    }
    this.setState({
      toDoList: [...this.state.toDoList, newItem],
      task: ''
    });
  }

  //Day 2 functionality below:

  markComplete = event =>{

    //iterate through list and find all with exact match
    this.state.toDoList.forEach(element =>{

      if (event.target.innerText === element.task){
        if(element.completed){
          console.log("The element will be marked incomplete")
          element.completed = false;
          event.target.style.textDecoration = 'none';
        }
        else{
          console.log("The element will be marked completed")
          element.completed = true;
          event.target.style.textDecoration = 'line-through';
        }
      }
    })

  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList 
          taskList = {this.state.toDoList} 
          markComplete={this.markComplete}
        />
        <TodoForm
          retrieveInput={this.retrieveInput}
          updateList={this.updateList}
          task={this.state.task}
        />
      </div>
    );
  }
}

export default App;
