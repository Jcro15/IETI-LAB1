import React from 'react';
import './App.css';
import {TodoList} from './TodoList';

export class App extends React.Component {

  constructor(props) {
    super(props);
    let init=[{text:"Learn React", priority:5, dueDate: new Date() },
    {text:"Learn about APIs", priority:4, dueDate: new Date(2020,1,23) },
    {text:"write TODO App", priority:3, dueDate: new Date(2020,1,30) }];

    this.state = { todos : init, text:'',priority:null};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange=this.handleChange.bind(this);
  };

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList todoList={this.state.todos} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            What needs to be done?
          </label>
          <input
            name="text"
            onChange={this.handleChange}
          />
          <input
            name="priority"
            onChange={this.handleChange}
          />
          <button>
            Add #{this.state.todos.length + 1}
          </button>
        </form>
      </div>
    );
  }



  handleChange(e) {
    let nam = e.target.name;
    let val = e.target.value;
    this.setState({[nam]: val});
  }

  handleSubmit(e) {
    
    e.preventDefault();
    if (!this.state.text.length || this.state.priority==null) {
      return;
    }
    const newItem = {
      text: this.state.text,
      priority: this.state.priority,
      dueDate: Date.now()
    };
    this.setState(prevState => ({
      todos: prevState.todos.concat(newItem),
      text: '',
      priority:null
    }));
  }
}


