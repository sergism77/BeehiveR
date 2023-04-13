//this is the apiary component

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchBees } from '../../actions/index';
import Bee from '../bee/bee';

class Apiary extends Component {
    constructor(props) {
        super(props);
        this.state = {
        bees: []
        }
    }
    
    componentDidMount() {
        this.props.fetchBees();
    }
    
    renderBees() {
        return this.props.bees.map((bee) => {
        return (
            <Bee key={bee.id} bee={bee} />
        );
        });
    }
    
    render() {
        return (
        <div>
            <h1>Apiary</h1>
            <ul>
            {this.renderBees()}
            </ul>
        </div>
        );
    }
    }

function mapStateToProps(state) {
    return { bees: state.bees };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchBees }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Apiary);


