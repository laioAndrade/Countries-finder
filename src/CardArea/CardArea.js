import React, { Component } from 'react';
import classes from './CardArea.module.css';

import Card from './Card/Card';

class CardArea extends Component {


    render() {
        const countries = this.props.countries.map(country => {
            return <Card 
              name={country.name} 
              population={country.population} 
              region={country.region}
              capital={country.capital}
              flag={country.flag}/>
        })
        return(
            <div className={classes.CardArea}>
                {countries}
            </div>
            
        );
    }
}


export default CardArea;