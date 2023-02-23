import React from "react";

export class ToDoList extends React.Component{
    render(){
      return (
        <>
            <h2> items list</h2>
            <ul>
                {this.props.children}
            </ul>
        </>
      )
    }
  }