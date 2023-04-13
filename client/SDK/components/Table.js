//this is the Table.js file located in the src/components folder

import React from 'react';
import { connect } from 'react-redux';

class Table extends React.Component {
    render() {
        return (
            <div className="table">
                {this.props.children}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

const connectedTable = connect(mapStateToProps)(Table);
export { connectedTable as Table };
