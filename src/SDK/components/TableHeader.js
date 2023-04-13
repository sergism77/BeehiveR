//this is the TableHeader.js file located in the src/components folder

import React from 'react';
import { connect } from 'react-redux';

class TableHeader extends React.Component {
    render() {
        return (
            <div className="table__header">
                {this.props.children}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

const connectedTableHeader = connect(mapStateToProps)(TableHeader);
export { connectedTableHeader as TableHeader };

