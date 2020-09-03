import React from 'react';
import classes from './Toolbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const toolbar = () => (
    <div className={classes.Toolbar}>
        <p>Where in the world?</p>
        <div className={classes.DarkMode}> 
            <FontAwesomeIcon icon="moon" color="white"/>
            <p>Dark Mode</p>
        </div>
    </div>
); 

export default toolbar; 