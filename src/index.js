import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// const books = ['book1','book2','book3','book4']
// let functionForClick=()=>{
//   console.log('i was clicked');
// }
// const check = true
// let test = (
// <>
//   <ul>
//     <li>123</li>
//   </ul>
//   <button onClick={functionForClick}>button</button>
//   {check ? <h1>its checked</h1> : <h1>not checked </h1>}
//   <ul>
//     {books.map((book,index)=>(<li key={index} className='test'>{book}</li>))}
//   </ul>
// </>)
class ToDoItem extends React.Component{
  render(){
    return (<li onClick={()=>{this.props.printInConsole(this.props.title)}} >{this.props.title}{(this.props.done) ? '✔️' : '❌'}</li>)
  }
}
class ToDoApp extends React.Component{
  render(){
    return (
      <div className='reactDiv'>
        <h1>{this.props.heading} | count : {this.props.count}</h1>
        <ul className='reactUl'>
          {this.props.todos.map((todo,index)=>{
            return <ToDoItem printInConsole={this.props.saySomething} key={index} title={todo.title} done={todo.done} /> 
          })}
        </ul>
      </div>
    )
  }
}
const todos =[
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
const saySomething = (something)=>{
  console.log(something);
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ToDoApp saySomething={saySomething} heading='Test To Do App' count={todos.length} todos={todos} />); 