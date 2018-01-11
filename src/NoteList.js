import React, { Component } from 'react'

class NoteList extends Component {

  constructor(props){
    console.log(props)
    super(props);
  }  

  renderNotesList(note, index){
    
       return (
        <div>{note}</div>
       )
   
  }

  render() {
    return (
      <div>
         {
            this.props.notes.map(this.renderNotesList)
         }
      </div>
    )
  }
}

export default NoteList;
