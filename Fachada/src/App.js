import React, { Component } from 'react';
import 'custom-bootstrap'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div class="container-fluid">
    <div class="row">
      <div class="col">
        <div class="float-left">
          <h1>Fachada</h1>
        </div>
        <div class="float-right">
          <p>Log in|Register</p>
        </div>
      </div>
    </div>
  </div>
    );
  }
}

export default App;
