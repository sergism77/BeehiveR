// this is the Wrapper.js file in the SDK folder

import React from 'react';
import { connect } from 'react-redux';

class Wrapper extends React.Component {
    render() {
        return (
            <div className="wrapper">
                {this.props.children}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

const connectedWrapper = connect(mapStateToProps)(Wrapper);
export { connectedWrapper as Wrapper };

