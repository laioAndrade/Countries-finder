import React, { Component } from 'react';
import './App.css';

import Toolbar from './Toolbar/Toolbar';
import CardArea from './CardArea/CardArea';
import Country from './Country/Country';

import { Route, Switch } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faMoon, faSearch, faArrowLeft} from '@fortawesome/free-solid-svg-icons';

library.add(fab, faMoon, faSearch, faArrowLeft);

class App extends Component {
  
  render() {

    return (
      <div >
          <Toolbar />
          <Switch>
            <Route path="/" exact component={CardArea}/>
            <Route path="/:name" component={Country} />
            
          </Switch>
          
      </div>
    );
  }
}

export default App;
