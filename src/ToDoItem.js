import React from "react";

export class ToDoItem extends React.Component{
    render(){
      return (<li onClick={()=>{this.props.onClick(this.props.id)}} >{this.props.title}{(this.props.done) ? '✔️' : '❌'}</li>)
    }
  }