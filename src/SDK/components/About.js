//this is the About.js component

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import aboutText from './aboutText';

class About extends Component {
    render() {
        return (
        <div>
            <h1>About BeehiveR</h1>
            <p>{aboutText}</p>
            <Link to="/">Home</Link>
        </div>
        );
    }
    }

export default About;

