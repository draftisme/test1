import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {description: '', date: '', todos: []}
  }

  inputChanged = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  addTodo = (event) => {
    event.preventDefault();
    let todo = {
      description: this.state.description,
      date: this.state.date
    };

    this.setState({
      todos: [...this.state.todos, todo]
    });
  }

  deleteBtn = (index) => {
    let todos = this.state.todos.filter((todo, i) => i !== index);
    this.setState({todos});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Simple Todolist</h2>
        </div>
        <div>
          <form onSubmit={this.addTodo}>
            Description: <input type="text" name="description" onChange={this.inputChanged} value={this.state.description}/>
            Date: <input type="text" name="date" onChange={this.inputChanged} value={this.state.date}/>
            <input type="submit" value="Add"/>
          </form>
        </div>
        <div>
          <table>
            <tbody>
              <tr><th>Date</th><th>Description</th></tr>
              {this.state.todos.map((item, index) => <tr key={index}><td>{item.date}</td><td>{item.description}</td><button onClick={() => this.deleteBtn(index)}>Delete</button></tr>)}
            </tbody>
          </table>
        </div>          
      </div>    
    );
  }
}

export default App;