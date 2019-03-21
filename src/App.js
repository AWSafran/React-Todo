import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import SearchForm from './components/SearchComponents/SearchForm';

const toDo = []

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor(){
    super();

    this.state = {
      toDoList: toDo,
      task: '',
      searched: [],
      search: ''
    }
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  retrieveInput = event =>{
    console.log(event.target.value);
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

  //Day 1 Stretch: search
  searchList = event =>{
    console.log(`searching for ${event.target.value}`);


    const searchedItems = this.state.toDoList.filter(x => x.task.includes(event.target.value));
    this.setState({
      search: event.target.value,
      searched: searchedItems
    })
    console.log(this.state.search);
  }

  //Day 2 functionality below:

  markComplete = event =>{

    //iterate through list and find all with exact match
    this.state.toDoList.forEach(element =>{

      if (event.target.innerText === element.task){
        if(element.completed){
          console.log("The element will be marked incomplete")
          element.completed = false;
          event.target.classList.remove('clicked')
          //event.target.style.textDecoration = 'none';
        }
        else{
          console.log("The element will be marked completed")
          element.completed = true;
          event.target.classList.add('clicked')
          //event.target.style.textDecoration = 'line-through';
        }
      }
    })

  }

  deleteCompleted = event =>{
    event.preventDefault();
    const incomplete = this.state.toDoList.filter(element => !element.completed);
    console.log(incomplete);
    document.querySelectorAll('li').forEach(x=>{
      x.classList.remove('clicked');
    })
    this.setState({
      toDoList: incomplete
    })
  }

  render() {
    return (
      <div>
        <h1>Welcome to your Todo App!</h1>

        <TodoForm
          retrieveInput={this.retrieveInput}
          updateList={this.updateList}
          task={this.state.task}
          deleteCompleted={this.deleteCompleted}
        />

        <TodoList 
          taskList = {this.state.toDoList} 
          markComplete={this.markComplete}
        />

        <SearchForm
          searchList = {this.searchList}
          search={this.state.search} 
        />

        <TodoList
          taskList = {this.state.searched}
          markComplete={this.markComplete}
        />


      </div>
    );
  }
}

export default App;
