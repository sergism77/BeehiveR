//this is the Container.js in the SDK folder
//What is the purpose of the container component?
//The purpose of the container component is to provide a container for other components
//What is the purpose of the container component in the SDK?
//The purpose of the container component in the SDK is to provide a container for other components in the SDK


import React from 'react';
import { connect } from 'react-redux';

class Container extends React.Component {
    render() {
        return (
            <div className="container">
                {this.props.children}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

const connectedContainer = connect(mapStateToProps)(Container);
export { connectedContainer as Container };

