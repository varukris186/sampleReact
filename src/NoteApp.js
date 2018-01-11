import React, { Component } from 'react'

class NoteApp extends Component {
  constructor(props){
    super(props);
    this.setValue = this.setValue.bind(this);
    this.clearText = this.clearText.bind(this);
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
        let obj = prevState;
        prevState["value"] = event;
        return prevState;
    });
  }

  clearText(e){
      this.setState((prevState) => {
        let obj = prevState;
        prevState["value"] = '';
        return prevState;
      });
  }


  render() {
    return (
      <div>
          <div class="title">Enter a New Note </div>
          <textarea id="txtArea" value={this.state.value} placeholder={this.state.placeholder} onChange={this.setValue}  minLength={this.state.minLength} maxLength={this.state.maxLength}></textarea>
          <div class="btn-grp">
              <button onClick={() => this.props.saveNote(this.state.value)}>Add</button>
              <button onClick={this.clearText}>Clear</button>
          </div>    
      </div>
    )
  }
}

export default NoteApp;
