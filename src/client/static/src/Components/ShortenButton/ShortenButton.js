import React from 'react';
import "./ShortenButton.css"

class ShortenButton extends React.Component {
  constructor(props){
    super();
  }

  onClick() {
    this.props.onClick();
    console.log("Run button Clicked");
  }

  
  render() {
    return (
      <div className="run-button-area">
        <button onClick={this.onClick.bind(this)}
                className="run-button-layout">
          RUN
        </button>
      </div>
    );
  }
}

export default ShortenButton;