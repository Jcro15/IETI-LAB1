import React from 'react';

export class Card extends React.Component { 
  state = {
    backGround: "#4b4b4b"
};

mouseOn = (e) => {
  this.setState({ backGround: "#9D9D9D" });
  console.log(this.state.backGround)
};
 
mouseOff = (e) => {
  this.setState({ backGround: "#4b4b4b" }); 
  console.log(this.state.backGround)
}; 


  render() {
    const card = {
      color: "white",
      backgroundColor: this.state.backGround,
      padding: "10px",
      fontFamily: "Arial",
      width: this.props.width, 
      height: "auto",
      margin: "20px"
    };

      return (          
        <div id="test" style={card} onMouseEnter={()=>this.mouseOn(this)} onMouseLeave={()=>this.mouseOff(this)}>
            {this.props.body}
        </div>
      );
  }
}

