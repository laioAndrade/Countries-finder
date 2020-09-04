import React, { Component } from 'react';
import classes from './Card.module.css';

class Card extends Component {
    render(){
        return(
            <div className={classes.Card} >  
                <img className={classes.Flag} src={this.props.flag} alt="flag"/>
                <div className={classes.Info}>
                    <p><strong>{this.props.name}</strong></p>
                    <span><strong>Population:</strong> {this.props.population}</span>
                    <span><strong>Region:</strong> {this.props.region}</span>
                    <span><strong>Capital:</strong> {this.props.capital}</span>
                </div>
            </div>
        );
    }
}

export default Card;