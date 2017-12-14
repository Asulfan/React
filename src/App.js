import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let defStyle = {color: '#fff', 'font-size':'4em', 'font-family': 'Roboto', padding: '5px'};
let bgColor = '#010101';
let title = 'Title.';

class App extends Component {
  render() {
    return (
      <div id='container'>
        <div id='header'>
          <h1 style={defStyle}>{title}</h1>
        </div>
        <div id='main'>
          <Example />
        </div>
      </div>
    );
  }
}
class Example extends Component {
  render() {
      return(<h3 style={defStyle}>This is a simple component.</h3>);
  }
}

export default App;
