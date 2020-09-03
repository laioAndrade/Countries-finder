import React, { Component } from 'react';
import classes from './CardArea.module.css';

import axios from '../axios';

import Card from './Card/Card';
import SearchTools from '../SearchTools/SearchTools';

class CardArea extends Component {
    state = {
        countries: [],
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
    

    render() {
        const countries = this.state.countries.map(country => {
            return <Card 
              key={country.name}
              name={country.name} 
              population={country.population} 
              region={country.region}
              capital={country.capital}
              flag={country.flag}
              />
        })
        return(
            <>
            <SearchTools inputChanged={this.inputTextHandler} selectChanged={this.selectHandler}/>
            <div className={classes.CardArea}>
                {countries}
            </div>
            </>
        );
    }
}


export default CardArea;