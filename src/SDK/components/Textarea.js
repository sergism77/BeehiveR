//this is the Textarea.js in the SDK folder

import React from 'react';
import { connect } from 'react-redux';

class Textarea extends React.Component {
    render() {
        return (
            <textarea className="textarea" placeholder={this.props.placeholder} />
        );
    }
}

function mapStateToProps(state) {
    return {};
}

const connectedTextarea = connect(mapStateToProps)(Textarea);
export { connectedTextarea as Textarea };

