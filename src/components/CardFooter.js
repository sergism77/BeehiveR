//this is the CardFooter.js file located in the src/components folder

import React from 'react';
import { connect } from 'react-redux';

class CardFooter extends React.Component {
    render() {
        return (
            <div className="card__footer">
                {this.props.children}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

const connectedCardFooter = connect(mapStateToProps)(CardFooter);
export { connectedCardFooter as CardFooter };

