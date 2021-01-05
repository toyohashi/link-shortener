import React from 'react';
import "./Display.css";

class Display extends React.Component {
  constructor(props) {
    super();
  }

  onChange(event){
    this.props.onChange(event.target.value);
  }

  render() {
    return (
      <div className="display-area">
         <textarea 
         className="display-text-area"
         placeholder={this.props.placeholder}
         type='text'
         value={this.props.data}
         disabled={this.props.displayDisable}
         onChange={this.onChange.bind(this)}/>
        </div>
    );
  }
}

export default Display;