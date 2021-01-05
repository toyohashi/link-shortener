import React from 'react';
import './App.css';
import Axios from 'axios';
import Display from '../Components/Display/Display';
import ShortenButton from '../Components/ShortenButton/ShortenButton';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      displayDisable:"True",
      inputLink: '',
      outputLink: ''
    }
  }

  // wakati = text => {
  //   //console.log("input text >>"+text)
  //   Axios.post('http://127.0.0.1:5000/wakati', {
  //     post_text: text
  //   }).then(function(res) {
  //     alert(res.data.result);
  //   })
  // };

  // handleSubmit = event => {
  //   this.wakati(this.state.value)
  //   event.preventDefault();
  // };

  // handleChange = event => {
  //   this.setState({ value: event.target.value });
  // };
  inputChangeHandler = (value) => {
    this.setState({inputLink: value});
  }

  onRunClick = async () => {
    var route = `http://127.0.0.1:5000/Link=${this.state.inputLink}`;
    var response = await Axios.post(route, {
          post_text: this.state.inputLink
        }).then(function(res) {
          return res.data.result;
        })
    console.log(response);
    this.setState({outputLink: response});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>LINK SHORTENER</h1>
        </div>
        {/*Input area*/}
        <div className="input-area">
            <Display onChange={this.inputChangeHandler} placeholder="Paste your link here"/>
        </div>
        {/*ShortenRun button*/}
        <div className="run-button">
            <ShortenButton onClick={this.onRunClick.bind(this)} />
        </div>
        {/*Output-area*/}
        <div className="output-area">
            <Display data={this.state.outputLink}
                      displayDisable={this.state.displayDisable}/> 
        </div>
      </div>
    );
  }



}

export default App;