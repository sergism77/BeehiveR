//this is the Image.js file in the SDK folder

import React from 'react';
import { connect } from 'react-redux';

class Image extends React.Component {
    render() {
        return (
            <img className="image" src={this.props.src} alt={this.props.alt} />
        );
    }
}

function mapStateToProps(state) {
    return {};
}

const connectedImage = connect(mapStateToProps)(Image);
export { connectedImage as Image };

