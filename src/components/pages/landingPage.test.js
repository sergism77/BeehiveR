//this is the landingPage.test.js in the src/components/pages folder

import React from 'react';
import { shallow } from 'enzyme';
import LandingPage from './landingPage';

describe('LandingPage', () => {
    test('matches snapshot', () => {
        const wrapper = shallow(<LandingPage />);
        expect(wrapper).toMatchSnapshot();
    });
    }
);
