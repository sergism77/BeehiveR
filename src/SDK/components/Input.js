//this is the Input.js file in the SDK folder

import React from 'react';
import { connect } from 'react-redux';

class Input extends React.Component {
    render() {
        return (
            <input className="input" placeholder={this.props.placeholder} />
        );
    }
}

function mapStateToProps(state) {
    return {};
}

const connectedInput = connect(mapStateToProps)(Input);
export { connectedInput as Input };

