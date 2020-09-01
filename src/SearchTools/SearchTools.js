import React, { Component } from 'react';
import classes from './SearchTools.module.css';

class SearchTools extends Component {

    render() {


        return(
            <div className={classes.SearchTools}> 
                <input  type="text" placeholder="   Search for a country..." onChange={this.props.inputChanged}/>
                <select onChange={this.props.selectChanged}>
                    <option defaultValue value="">Filter by Region</option>
                    <option value="africa">Africa</option>
                    <option value="americas">America</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europe</option>
                    <option value="oceania">Oceania</option>
                </select>
            </div>
        );
    }
}

export default SearchTools;