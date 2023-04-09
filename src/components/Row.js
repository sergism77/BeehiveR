//this is the Row.js file in the components folder

import React from 'react';
import { connect } from 'react-redux';

class Row extends React.Component {
    render() {
        return (
            <div className="row">
                {this.props.children}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

const connectedRow = connect(mapStateToProps)(Row);
export { connectedRow as Row };

