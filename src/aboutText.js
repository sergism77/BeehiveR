//this is the aboutText.js file in src

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class aboutText extends Component {
    render() {
        return (
            <div>
                <h1>About BeehiveR</h1>
                <p>Welcome to BeehiveR, the app designed for beekeepers and climate researchers alike. BeehiveR is an innovative platform being developed at Seigr Huset, and is set to revolutionize the way beekeepers and researchers interact with their hives. As a key part of the Seigr Network, which merges blockchain development with sustainable beekeeping, gaming, art, and more, BeehiveR is poised to be a driving force in the future of beekeeping and conservation. With BeehiveR, beekeepers can easily track the health and productivity of their hives, receive real-time alerts about potential issues, and connect with other beekeepers in their area. Climate researchers can use BeehiveR to collect valuable data on bee populations and their behaviors, helping to advance our understanding of how bees are impacted by climate change. Whether you're a beekeeper looking to improve your management practices or a researcher seeking to contribute to a vital cause, BeehiveR has everything you need to succeed.</p>
                <Link to="/">Home</Link>
            </div>
        );
    }
}

export default aboutText;
