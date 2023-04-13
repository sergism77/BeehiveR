//this is the CardBody.js file located in the src/components folder

import React from 'react';
import { connect } from 'react-redux';

class CardBody extends React.Component {
    render() {
        return (
            <div className="card__body">
                {this.props.children}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

const connectedCardBody = connect(mapStateToProps)(CardBody);
export { connectedCardBody as CardBody };

