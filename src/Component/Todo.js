import React from 'react';
import {Card} from './Card';

export class Todo extends React.Component {

constructor(props) {
  super(props);
}   

  render() {
    return (
      <Card
        body = {
          <div>  
            <h2>{this.props.text}</h2>
            <p>{this.props.priority}</p>
            <p>{this.props.dueDate.toString()}</p> 
          </div>
        }
        width = {350}     
      />
    );
  }
}