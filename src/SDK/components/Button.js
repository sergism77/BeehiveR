//this is the Button.js in the SDK folder

import React from 'react';
import { connect } from 'react-redux';

class Button extends React.Component {
    render() {
        return (
            <button className="button">
                {this.props.children}
            </button>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

const connectedButton = connect(mapStateToProps)(Button);
export { connectedButton as Button };