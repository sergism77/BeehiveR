//this is the Column.js file in the components folder

import React from 'react';
import { connect } from 'react-redux';

class Column extends React.Component {
    render() {
        return (
            <div className="col">
                {this.props.children}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

const connectedColumn = connect(mapStateToProps)(Column);
export { connectedColumn as Column };

