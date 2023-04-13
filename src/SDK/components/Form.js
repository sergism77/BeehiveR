//this is the Form.js file in the SDK folder

import React from 'react';
import { connect } from 'react-redux';

class Form extends React.Component {
    render() {
        return (
            <form className="form">
                {this.props.children}
            </form>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

const connectedForm = connect(mapStateToProps)(Form);
export { connectedForm as Form };

