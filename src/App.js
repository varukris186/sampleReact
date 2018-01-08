import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Note from './Note.js';

class App extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
  componentWillMount(){
    console.log("CWM");
  }

  state = {
    count: 1
  }

  handleClick(){
    //Count increase by 1
    this.setState((prevState) => {
      return {count: prevState.count + 1}
    });
  }
  
  render() {
    console.log("Render");
    return (
      <div>
      <div>My First Component</div>
      <div onClick={this.handleClick}> Add Note </div>
      <Note note={'This is my note content'} isUrgent={true} count={this.state.count}/>
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
