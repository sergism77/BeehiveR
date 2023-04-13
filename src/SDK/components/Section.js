//this is the sections component in the SDK folder

import React from 'react';
import { connect } from 'react-redux';

import { Container } from './Container';
import { Button } from './Button';
import { Input } from './Input';
import { Textarea } from './Textarea';

class Sections extends React.Component {
    render() {
        return (
            <div className="sections">
                <Container>
                    <Button>Button</Button>
                    <Input placeholder="Input" />
                    <Textarea placeholder="Textarea" />
                </Container>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

const connectedSections = connect(mapStateToProps)(Sections);
export { connectedSections as Sections };
