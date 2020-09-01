import React, { Component } from 'react';
import classes from './SearchTools.module.css';

class SearchTools extends Component {

    render() {


        return(
            <div className={classes.SearchTools}> 
                <input  type="text" placeholder="   Search for a country..." onChange={this.props.changed}/>
                <select>
                    <option defaultValue>Filter by Region</option>
                    <option>Africa</option>
                    <option>America</option>
                    <option>Asia</option>
                    <option>Europe</option>
                    <option>Oceania</option>
                </select>
            </div>
        );
    }
}

export default SearchTools;