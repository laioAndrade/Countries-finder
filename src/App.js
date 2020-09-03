import React, { Component } from 'react';
import './App.css';

import Toolbar from './Toolbar/Toolbar';

import axios from './axios';
import CardArea from './CardArea/CardArea';
import SearchTools from './SearchTools/SearchTools';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faMoon, faSearch} from '@fortawesome/free-solid-svg-icons';

library.add(fab, faMoon, faSearch);

class App extends Component {
  state = {
    countries: [],
  }

  componentDidMount() {
    this.getAll();
  } 


  getAll () {
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
        this.getAll();
    }  
  }

  selectHandler = (event) => {
    if(event.target.value === ""){
      this.getAll();
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
