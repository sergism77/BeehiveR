//this is the error component that will be displayed when the user enters an invalid url

import React from 'react';
import { Link } from 'react-router-dom';

function Error() {
    return (
        <div>
            <h1>Error 404</h1>
            <Link to="/">Home</Link>
        </div>
    )
}

export default Error;

