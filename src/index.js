import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const books = ['book1','book2','book3','book4']
let functionForClick=()=>{
  console.log('i was clicked');
}
const check = true
let test = (
<>
  <ul>
    <li>123</li>
  </ul>
  <button onClick={functionForClick}>button</button>
  {check ? <h1>its checked</h1> : <h1>not checked </h1>}
  <ul>
    {books.map((book,index)=>(<li key={index} className='test'>{book}</li>))}
  </ul>
</>)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(test);