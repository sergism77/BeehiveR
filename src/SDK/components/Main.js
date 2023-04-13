//this is the Main.js file in the components folder

import React from 'react';
import { connect } from 'react-redux';

class Main extends React.Component {
    render() {
        return (
            <main className="main">
                {this.props.children}
            </main>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

const connectedMain = connect(mapStateToProps)(Main);
export { connectedMain as Main };

