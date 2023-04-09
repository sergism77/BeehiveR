//this is the TableRow.js file located in the src/components folder

import React from 'react';
import { connect } from 'react-redux';

class TableRow extends React.Component {
    render() {
        return (
            <div className="table__row">
                {this.props.children}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

const connectedTableRow = connect(mapStateToProps)(TableRow);
export { connectedTableRow as TableRow };

