import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ToDoItem } from "./ToDoItem.js";
import { ToDoList } from "./ToDoList.js";

class App extends React.Component{
  constructor(props){
    super(props)

    this.state={
      todos:[
        {id:'1',title:'todo 1', done: false},
        {id:'2',title:'todo 2', done: true},
        {id:'3',title:'todo 3', done: false},
        {id:'4',title:'todo 4', done: true},
        {id:'5',title:'todo 5', done: false},
        {id:'6',title:'todo 6', done: true},
        {id:'7',title:'todo 7', done: false},
        {id:'8',title:'todo 8', done: true},
        {id:'9',title:'todo 9', done: false},
        {id:'10',title:'todo 10', done: true}
      ]
    }
  }
handleClick = (id)=>{
  // console.log(id);
  const newState = this.state.todos.map((todo)=>{
    if (todo.id===id) {
      todo.done=!todo.done
    }
    return todo
  })
  this.setState({todos:newState})
}
render(){
    return (
      <div className='reactDiv'>
        <h1>{this.props.heading} | count : {this.state.todos.length}</h1>
        <ToDoList>
          {this.state.todos.map((todo,index)=>{
            return <ToDoItem id={todo.id} title={todo.title} done={todo.done} onClick={this.handleClick} key={index}/>
          })}
        </ToDoList>
      </div>
    )
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App heading='Test To Do App' />); 