//this is the wiki.js file in the pages folder
//the wiki will be used to display information about the app and publish articles about beekeeping
//only developers and administrators will be able to edit the wiki
//the wiki will be a markdown file that will be converted to html
//the wiki will be stored in a database
//the wiki will be displayed on the wiki page
//registered users will be able to read the articles
//no registered users will only be able to see the technical information about the app on the wiki
//the wiki will have the same navigation as the rest of the app
//the wiki will have a sidebar with links to the different articles
//the wiki will have a search function
//the wiki will have a table of contents
//the wiki will have the same footer as the rest of the app
//the wiki will have the same navigation as the rest of the app
//the wiki will look like the rest of the app

//what do we need in the wiki.js file?

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { getUser } from '../../ducks/reducer';
import './app.css';

class Wiki extends Component {
    constructor() {
        super();
        this.state = {
            wiki: '',
        }
    }

    componentDidMount() {
        this.props.getUser();
    }

    render() {
        return (
            <div>
                <h1>Wiki</h1>
                <p>This is the wiki page</p>
                <Link to="/">Home</Link>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { getUser })(Wiki);



