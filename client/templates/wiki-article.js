//this is the template for the wiki article page
//this is the wiki-article.js file in the templates folder
//the wiki article page will be used to display the articles
//only developers and administrators will be able to edit the wiki
//the wiki will be a markdown file that will be converted to html
//the wiki will be stored in a database
//the wiki will be displayed on the wiki page
//registered users will be able to read the articles
//no registered users will only be able to see the technical information about the app on the wiki

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { getUser } from '../../ducks/reducer';
import './app.css';

class WikiArticle extends Component {
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

export default connect(mapStateToProps, { getUser })(WikiArticle);

