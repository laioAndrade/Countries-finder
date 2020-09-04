import React, { Component } from 'react';
import classes from './Country.module.css';

import axios from 'axios';
import { Redirect, NavLink } from 'react-router-dom';
import CardArea from '../CardArea/CardArea';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
            !this.state.error ?  
            <>
            <div className={classes.Back}>
                <NavLink to="/"
                    activeStyle={{activeStyle: 'hsl(209, 23%, 30%)'}}>
                    <FontAwesomeIcon icon="arrow-left" color="white"/>
                    <button type="button" >Back</button>
                </NavLink>
            </div>
            
            <div className={classes.Country}> 
                <div className={classes.Flag}><img className={classes.Img} src={this.state.country.flag} alt="Flag"/></div>
                <div className={classes.Info}>
                    <p style={{fontWeight: 'bold', fontSize: '1.6rem'}}>{this.state.country.name}</p>
                    <div className={classes.InfoSides}>
                        <div className={classes.InfoLeft}>
                            <span><strong>Native Name:</strong> {this.state.country.nativeName}</span>
                            <span><strong>Population:</strong> {this.state.country.population}</span>
                            <span><strong>Region:</strong> {this.state.country.region}</span>
                            <span><strong>Sub Region:</strong> {this.state.country.subregion}</span>
                            <span><strong>Capital:</strong> {this.state.country.capital}</span>
                        </div>
                        <div className={classes.InfoRight}>
                            <span><strong>Top Level Domain:</strong> {this.state.country.topLevelDomain} </span>
                            <span><strong>Languages:</strong> </span>
                        </div>
                    </div>
                </div>
            </div>
            </>
            : <Redirect from={this.props.match.url} to={CardArea}/> 
            
        );
    }

    
}

export default Country;