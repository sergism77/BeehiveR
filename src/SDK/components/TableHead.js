//this is the TableHead.js file located in the src/components folder

import React from 'react';
import { connect } from 'react-redux';

class TableHead extends React.Component {
    render() {
        return (
            <div className="table__head">
                {this.props.children}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

const connectedTableHead = connect(mapStateToProps)(TableHead);
export { connectedTableHead as TableHead };
