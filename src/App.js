import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Note from './Note.js';
import NoteApp from './NoteApp.js'

class App extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.saveNote = this.saveNote.bind(this);
  }
  
  componentWillMount(){
    console.log("CWM");
  }

  state = {
    notes:new Array()
  }

  handleClick(){
    //Count increase by 1
    this.setState((prevState) => {
      return {count: prevState.count + 1}
    });
  }

  saveNote(param){
    this.setState({
      notes: [...this.state.notes, param]
    })
  }
  
  render() {
    console.log("Render");
    return (
      <div>
      <NoteApp saveNote={this.saveNote}/>
      </div>
    );
  }

  componentDidMount() {
    console.log("CDM");
  }

  
  componentWillReceiveProps(nextProps) {
    console.log("cwrp");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextState);
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log(nextState);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState);
  }

  
}


export default App;
