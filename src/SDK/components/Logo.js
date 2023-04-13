//this is the Logo.js file in the SDK folder
//what is the purpose of the logo component?
//the purpose of the logo component is to provide a logo


import React from 'react'
import { connect } from 'react-redux'

class Logo extends React.Component {
    render() {
        return (
            <div className="logo">
                <img src={this.props.src} alt={this.props.alt} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

const connectedLogo = connect(mapStateToProps)(Logo);
export { connectedLogo as Logo };

