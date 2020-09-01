import React, { Component } from 'react';
import './App.css';

import Toolbar from './Toolbar/Toolbar';

import axios from './axios';
import CardArea from './CardArea/CardArea';
import SearchTools from './SearchTools/SearchTools';

class App extends Component {
  state = {
    countries: [],
  }

  componentDidMount() {
    axios.get('/all')
      .then(response => {
        const updateCountries = response.data;
        this.setState({countries: updateCountries});
      });
  } 

  inputTextHandler = (event) => {
    if(event.target.value){
      axios.get('/name/' + event.target.value)
      .then(response => {
        const updateCountries = response.data;
        this.setState({countries: updateCountries})
      })
      .catch(error => {
        this.setState({countries: []})
      });
    } else {
        axios.get('/all')
        .then(response => {
          const updateCountries = response.data;
          this.setState({countries: updateCountries});
        });
    }  
  }

  selectHandler = (event) => {
    if(event.target.value === ""){
      axios.get('/all')
        .then(response => {
          const updateCountries = response.data;
          this.setState({countries: updateCountries});
        });
    }else {
      axios.get('/region/' + event.target.value)
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
          <SearchTools inputChanged={this.inputTextHandler} selectChanged={this.selectHandler}/>
          <CardArea countries={this.state.countries}/>
      </div>
    );
  }
}

export default App;
