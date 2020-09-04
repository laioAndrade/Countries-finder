import React, { Component } from 'react';
import classes from './Country.module.css';

import axios from 'axios';
import { Redirect } from 'react-router';
import CardArea from '../CardArea/CardArea';

class Country extends Component {
    state = {
        country: [],
        error: false
    }

    componentDidMount() {      
            axios.get('https://restcountries.eu/rest/v2/name/' + this.props.match.params.name + '?fullText=true')
            .then(response => {
                this.setState({country: response.data[0]});
            })
            .catch(error => {
                this.setState({error: true});
            });
    }

    render () {
         
        return (
            !this.state.error ?  <div className={classes.Country}> 
                <div className={classes.Flag}><img className={classes.Img} src={this.state.country.flag} alt="Flag"/></div>
                <div className={classes.Info}>
                    <p style={{fontWeight: 'bold', fontSize: '1.6rem'}}>{this.state.country.name}</p>
                    <div className={classes.InfoSides}>
                        <div className={classes.InfoLeft}>
                            <span>Native Name: {this.state.country.nativeName}</span>
                            <span>Population: {this.state.country.population}</span>
                            <span>Region: {this.state.country.region}</span>
                            <span>Sub Region: {this.state.country.subregion}</span>
                            <span>Capital: {this.state.country.capital}</span>
                        </div>
                        <div className={classes.InfoRight}>
                            <span>Top Level Domain: {this.state.country.topLevelDomain}</span>
                            <span>Languages</span>
                        </div>
                    </div>
                </div>
            </div>
            : <Redirect from={this.props.match.url} to={CardArea}/> 
            
        );
    }

    
}

export default Country;