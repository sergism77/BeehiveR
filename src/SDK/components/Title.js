//this is the title.js file in the SDK folder

import React from 'react';
import { connect } from 'react-redux';

class Title extends React.Component {
    render() {
        return (
            <h1 className="title">{this.props.text}</h1>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

const connectedTitle = connect(mapStateToProps)(Title);
export { connectedTitle as Title };
