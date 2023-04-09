//this is the TableBody.js file located in the src/components folder

import React from 'react';
import { connect } from 'react-redux';

class TableBody extends React.Component {
    render() {
        return (
            <div className="table__body">
                {this.props.children}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

const connectedTableBody = connect(mapStateToProps)(TableBody);
export { connectedTableBody as TableBody };
