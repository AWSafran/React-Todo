import React from 'react';

const toDo = [
  {
    task: "Learn React",
    id: Date.now(),
    completed: false
  },
  {
    task: "Struggle",
    id: Date.now(),
    completed: false
  }
]

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
    console.log("Retrieving Input ", event.target.value);
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
      toDoList: [...this.state.toDoList, newItem]
    });
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
