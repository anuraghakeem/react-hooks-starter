import React from 'react';
import {shallow} from 'enzyme';
import Season from './Season';

describe('Season Component', () => {
    it('Should render season component without errors', () => {
        const component = shallow(<Season/>);
        const wrapper = component.find('.getSeason');
        expect(wrapper.length).toBe(1);
    })
})