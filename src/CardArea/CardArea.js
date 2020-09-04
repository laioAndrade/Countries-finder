import React, { Component } from 'react';
import classes from './CardArea.module.css';

import axios from '../axios';
import { Route, NavLink } from 'react-router-dom';

import Card from './Card/Card';
import SearchTools from '../SearchTools/SearchTools';
import Country from '../Country/Country';

class CardArea extends Component {
    state = {
        countries: []
      }
    
      getAll () {
        axios.get('/all')
        .then(response => {
          const updateCountries = response.data;
          this.setState({countries: updateCountries});
        });
      }
    
      componentDidMount() {
        this.getAll();
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
    
    clickedHandler = (country) => {
        this.setState({countries: country, clicked: true});
    }

    render() {
        const countries = this.state.countries.map(country => {
                return (
                    <NavLink to={{pathname: "/" + country.name, state: country}}
                            style={{ textDecoration: 'none' }}
                            key={country.name}>
                        <Card   
                            name={country.name} 
                            population={country.population} 
                            region={country.region}
                            capital={country.capital}
                            flag={country.flag}
                            />
                    </NavLink>
                    );
            })
        
        return(
            <>
                <SearchTools inputChanged={this.inputTextHandler} selectChanged={this.selectHandler}/>
                <div className={classes.CardArea}>
                    {countries}
                </div>
                <Route path="/:name" component={Country}/>
            </>
        );
    }
}


export default CardArea;