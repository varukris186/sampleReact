import React, { Component } from 'react'

class Note extends Component {

  constructor(props){
    console.log(props);
    super(props);
  } 

  render() {
    return (
      <div>
        Note :- {this.props.note} <br/>
        Total number of note : {this.props.count}
      </div>
    )
  }

  componentWillReceiveProps(nextProps) {
    console.log("cwrp"+nextProps);
  }

}

export default Note;
