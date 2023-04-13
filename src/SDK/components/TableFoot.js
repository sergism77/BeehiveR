//this is the TableFoot.js file in the components folder

import React from 'react';
import { connect } from 'react-redux';

class TableFoot extends React.Component {
    render() {
        return (
            <div className="table__foot">
                {this.props.children}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

const connectedTableFoot = connect(mapStateToProps)(TableFoot);
export { connectedTableFoot as TableFoot };

