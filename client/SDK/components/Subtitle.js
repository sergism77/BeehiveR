//this is the Subtitle.js in the SDK folder

import React from 'react';
import { connect } from 'react-redux';

class Subtitle extends React.Component {
    render() {
        return (
            <h2 className="subtitle">{this.props.text}</h2>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

const connectedSubtitle = connect(mapStateToProps)(Subtitle);
export { connectedSubtitle as Subtitle };
