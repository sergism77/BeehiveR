//this is the index.js in the SDK folder

import React from 'react';
import { connect } from 'react-redux';

import { Title } from './components/Title';
import { Subtitle } from './components/Subtitle';
import { Link } from './components/Link';
import { Wrapper } from './components/Wrapper';
import { Logo } from './components/Logo';


const SDK = () => {
    return (
        <Wrapper>
            <Logo />
            <Title text="Welcome to the SDK" />
            <Subtitle text="This is a subtitle" />
            <Link text="This is a link" />
        </Wrapper>
    );
}

function mapStateToProps(state) {
    return {};
}

const connectedSDK = connect(mapStateToProps)(SDK);
export { connectedSDK as SDK };

