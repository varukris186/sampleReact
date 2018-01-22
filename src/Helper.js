import React, { Component } from 'react';

class Helper extends Component {

  constructor(props){
      super(props);
      this.handleClick = this.handleClick.bind(this);
      console.log(props);
  }   

  state={
    'isExpanded':false,
    'dropdownClass':'contracted'
  }

  handleClick(){
    this.setState((prevState) => {
        console.log(prevState)
        prevState['isExpanded']= !prevState['isExpanded'];
        prevState['dropdownClass']= (prevState['dropdownClass'] == 'contracted')?'expanded':'contracted';
        return prevState;
    });
  }

  displayExpandedState(){
      console.log("called")
      if(this.state.isExpanded){
          return(
              
            <div className="helper">
                {this.props.message}
            </div>
          )
      }
      else{
          return false;
      }
  }



  render() {
    return (
      <section>

        

        <div class="drop-icon">
           <img onClick={this.handleClick} className={this.state.dropdownClass} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAGFBMVEX///8AAADX19eBgYHz8/PPz891dXWzs7Pg4U6uAAABH0lEQVR4nO3PiQ3CQAwAwfD33zFCCPFDnjvFtmYq2B0GAAAAAAAAAAAAAAAAAAAAAAAAAACy2h+2/Rz2a+9dHDf9HNeeu9p1G9ytvXbTazHMYK/FQIN9FkMN9lgMNth+Mdxg68WAg20XQw62XAw62G4x7GCrxcCDbRZDD7ZYDD64fDH84NLFBIPLFlMMLllMMjh/Mc3g3MVEg/MWUw3OWUw2OH0x3eDUxYSD0xZTDk5ZTDo4fjHt4NjFxIPjFlMPjllMPvh/Mf3gv8UCg78XSwz+Wiwy+H2xzOC3xUKDnxdLDX5aLDb4vlhu8HWx4ODzYsnBx8Wig/fFsoO3xcKD18XSg5fF4oPDcFo7AAAAAAAAAAAAAAAAAAAAAAAAgBjOPDIKLgweLicAAAAASUVORK5CYII=" /> 
        </div>        
        
        {this.displayExpandedState()}
       

      </section>
    )
  }
}

export default Helper;
