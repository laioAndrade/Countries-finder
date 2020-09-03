import React from 'react';
import classes from './Country.module.css';

const country = (props) => {
    return (
        <div className={classes.Country}> 
            <div className={classes.Flag}><img src={props.location.state.flag}/></div>
            <div className={classes.Info}>
                <p style={{fontWeight: 'bold', fontSize: '1.6rem'}}>{props.location.state.name}</p>
                <div className={classes.InfoSides}>
                    <div className={classes.InfoLeft}>
                        <span>Native Name: {props.location.state.nativeName}</span>
                        <span>Population: {props.location.state.population}</span>
                        <span>Region: {props.location.state.region}</span>
                        <span>Sub Region: {props.location.state.subregion}</span>
                        <span>Capital: {props.location.state.capital}</span>
                    </div>
                    <div className={classes.InfoRight}>
                        <span>Top Level Domain: {props.location.state.topLevelDomain}</span>
                        <span>Languages</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default country;