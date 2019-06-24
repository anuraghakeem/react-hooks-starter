import React from 'react';
import {shallow} from 'enzyme';
import Error from './Error';

describe('Error Component', () => {
    it('Should render error component without errors', () => {
        const component = shallow(<Error/>);
        const wrapper = component.find('.getError');
        expect(wrapper.length).toBe(1);
    })
})