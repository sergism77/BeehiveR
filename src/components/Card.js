//this is the Card.js file located in the src/components folder

import React from 'react';
import { connect } from 'react-redux';

class Card extends React.Component {
    render() {
        return (
            <div className="card">
                {this.props.children}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

const connectedCard = connect(mapStateToProps)(Card);
export { connectedCard as Card };

