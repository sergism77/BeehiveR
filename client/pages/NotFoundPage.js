//this is the NotFoundPage.js file in the pages folder
import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        <h1>404 - Not Found!</h1>
        <p>Sorry, an error has occured, Requested page not found!</p>
        <p><Link to="/">Go to Home</Link></p>
    </div>
);

export default NotFoundPage;


