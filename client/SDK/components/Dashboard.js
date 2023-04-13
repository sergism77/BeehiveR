//this is the Dashboard.js file

import React, { Component } from 'react'
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Dashboard extends Component {
    render() {
        const { projects } = this.props;
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectSummary />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <ProjectSummary />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.project.projects
    }
}

export default connect(mapStateToProps)(Dashboard)