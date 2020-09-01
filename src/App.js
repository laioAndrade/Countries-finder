import React, { Component } from 'react';
import './App.css';

import Toolbar from './Toolbar/Toolbar';

import axios from './axios';
import CardArea from './CardArea/CardArea';
import SearchTools from './SearchTools/SearchTools';

class App extends Component {
  state = {
    countries: []
  }

  componentDidMount() {
    axios.get('/all')
      .then(response => {
        const updateCountries = response.data;
        this.setState({countries: updateCountries});
      });
  } 

  textHandler = (event) => {
    if(event.target.value){
      axios.get('/name/' + event.target.value)
      .then(response => {
        const updateCountries = response.data;
        this.setState({countries: updateCountries})
      })
      .catch(error => {
        console.log('deu ruim');
      });
    } else {
        axios.get('/all')
        .then(response => {
          const updateCountries = response.data;
          this.setState({countries: updateCountries});
        });
    }
    
}

  render() {

    return (
      <div >
          <Toolbar />
          <SearchTools changed={this.textHandler}/>
          <CardArea countries={this.state.countries}/>
      </div>
    );
  }
}

export default App;
