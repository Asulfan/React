import React, { Component } from 'react';
import './App.css';

let headerStyle = {color: '#fff', 'fontSize':'4em', 'fontFamily':'Open Sans', 'fontWeight':'700', padding: '5px', margin:'0px'};
let titleStyle = {color: '#fff', 'fontSize':'1.5em', 'fontFamily':'Open Sans', 'fontWeight':'700', padding: '0px', margin:'0px 0px 10px 0px'};
let underTextStyle = {color: '#fff', 'fontSize':'0.9em', 'fontFamily':'Open Sans', 'fontWeight':'400', padding: '0px', margin:'0px'};
let title = 'TITLE.';
let articles = {'borderStyle':'Solid', 'borderWidth': '2px', 'borderColor':'#fff', width: '21vw', display: 'inline-block', padding: '1vw'};

class App extends Component {
  render() {
    return (
      <div id='container'>
        <div id='header'>
          <h1 style={headerStyle}>{title}</h1>
        </div>
        <div id='main'>
          <Example />
          <Example />
          <Example />
          <Example />
        </div>
      </div>
    );
  }
}
class Example extends Component {
  render() {
      return(
      <div style={articles}>
        <h3 style={titleStyle}>This is an Article Title.</h3>
        <h4 style={underTextStyle}>This is text from an article. Lots and lots of text. It is very important to have a lot of text here so that it fills the page nicely.</h4>
      </div>
      );
  }
}

export default App;
