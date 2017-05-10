import React, { Component } from 'react';
import Clock from './Clock';
import logo from './logo.svg';
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'December 22, 2017',
      newDeadline: ''
    }
  }
  changeDeadline() {
    this.setState({deadline: this.state.newDeadline});
  }
  render() {
    
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <div className="App-title">
          Countdown to {this.state.deadline}
        </div>
        <Clock
          deadline={this.state.deadline}
        />
        <Form inline>
          <FormControl
            className="Deadline-input" type="date"
            placeholder='new date'
            onChange={event => this.setState({newDeadline: event.target.value})}
          />
          <Button onClick={() => this.changeDeadline()}>
            Submit
          </Button>
        </Form>
        </p>
      </div>
    );
  }
}

export default App;
