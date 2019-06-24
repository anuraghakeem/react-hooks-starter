import React from 'react';
import { shallow } from 'enzyme';
import Error from './Error';

describe('Error Component', () => {
    it('Should render without errors', () => {
        const component = shallow(<Error />);
        const wrapper = component.find('.errorComponent');
        expect(wrapper.length).toBe(1);

    })
})