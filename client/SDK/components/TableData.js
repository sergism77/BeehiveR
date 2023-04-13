//this is the TableData.js file located in the src/components folder

import React from 'react';
import { connect } from 'react-redux';

class TableData extends React.Component {
    render() {
        return (
            <div className="table__data">
                {this.props.children}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

const connectedTableData = connect(mapStateToProps)(TableData);
export { connectedTableData as TableData };

