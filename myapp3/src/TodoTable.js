import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="App">
          <table>
            <tbody>
              <tr><th>Date</th><th>Description</th></tr>
              {this.props.todos.map((item, index) => <tr key={index}><td>{item.date}</td><td>{item.description}</td><button onClick={() => this.props.deleteBtn(index)}>Delete</button></tr>)}
            </tbody>
          </table>    
      </div>    
    );
  }
}

export default App;