//this is the Paragraph.js file in the SDK folder

import React from 'react';
import { connect } from 'react-redux';

class Paragraph extends React.Component {
    render() {
        return (
            <p className="paragraph">{this.props.text}</p>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

const connectedParagraph = connect(mapStateToProps)(Paragraph);
export { connectedParagraph as Paragraph };

