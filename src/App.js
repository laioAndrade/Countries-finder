import React, { Component } from 'react';
import './App.css';

import Toolbar from './Toolbar/Toolbar';

import axios from './axios';
import CardArea from './CardArea/CardArea';

class App extends Component {
  state = {
    countries: []
  }

  componentDidMount() {
    axios.get('/all')
      .then(response => {
        const countries = response.data;
        this.setState({countries: countries});
        console.log(response);
      });
  } 

  render() {

    return (
      <div >
          <Toolbar />
          <CardArea countries={this.state.countries}/>
      </div>
    );
  }
}

export default App;
