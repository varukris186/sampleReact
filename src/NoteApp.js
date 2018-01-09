import React, { Component } from 'react'

class NoteApp extends Component {
  constructor(props){
    super(props);
    this.setValue = this.setValue.bind(this);
  }  

  state = {
      'placeholder':'Enter Note here',
      'minLength':'12',
      'maxLength':'15',
      'value':''
  }

  setValue(e){
    let event = document.getElementById(e.target.id).value;   
    this.setState((prevState) => {
        console.log(event)
        return {value: event}
    });
  }


  render() {
    return (
      <div>
          <div class="title">Enter a New Note </div>
          <textarea id="txtArea" placeholder={this.state.placeholder} onChange={this.setValue}  minLength={this.state.minLength} maxLength={this.state.maxLength}></textarea>
          <div class="btn-grp">
              <button onClick={() => this.props.saveNote(this.state.value)}>Add</button>
              <button>Clear</button>
          </div>    
      </div>
    )
  }
}

export default NoteApp;
