import React from 'react';

export class Input extends React.Component {
  render() {

    const input = {
      marginLeft: "20px",
      marginTop: "20px"
    };

      return (          
        <>
            <label>{this.props.label}</label>
            <textarea
                rows = {1} 
                style={input} 
                name={this.props.name} 
                onChange={this.props.onChange}
                placeholder="Introduzca el valor"
            />
        </>
      );
  }
}

