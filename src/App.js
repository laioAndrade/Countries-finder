import React, { Component } from 'react';
import './App.css';

import Toolbar from './Toolbar/Toolbar';
import CardArea from './CardArea/CardArea';
import SearchTools from './SearchTools/SearchTools';

import axios from './axios';
import Country from './Country/Country';

import { Route } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faMoon, faSearch} from '@fortawesome/free-solid-svg-icons';

library.add(fab, faMoon, faSearch);

class App extends Component {
  
  render() {

    return (
      <div >
          <Toolbar />
          <Route path="/" exact component={CardArea}/>
          <Route path="/:name" component={Country} />
      </div>
    );
  }
}

export default App;
