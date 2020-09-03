import React, { Component } from 'react';
import './App.css';

import Toolbar from './Toolbar/Toolbar';
import CardArea from './CardArea/CardArea';
import SearchTools from './SearchTools/SearchTools';

import axios from './axios';

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
          <Route path="/" component={CardArea}/>
      </div>
    );
  }
}

export default App;
