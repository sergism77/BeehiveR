//this is the CardHeader.js file  located in the src/components folder

import React from 'react';
import { connect } from 'react-redux';

class CardHeader extends React.Component {
    render() {
        return (
            <div className="card__header">
                {this.props.children}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

const connectedCardHeader = connect(mapStateToProps)(CardHeader);
export { connectedCardHeader as CardHeader };

