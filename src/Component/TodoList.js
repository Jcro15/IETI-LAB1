import React from 'react';
import {Todo} from './Todo';

export class TodoList extends React.Component{
    render(){
    let toDos = this.props.todoList.map((toDo,i) =>
      <Todo key={i}
       text={toDo.text}
       priority={toDo.priority}
       dueDate={toDo.dueDate}/>
  );
  return (
    <>{toDos}</>
  );
}
    
}