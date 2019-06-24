import React from 'react';
import {shallow} from 'enzyme';
import Spinner from './Spinner';

describe('Spinner Component', () => {
    it('Should render spinner component without errors', () => {
        const component = shallow(<Spinner/>);
        const wrapper = component.find('.getSpinner');
        expect(wrapper.length).toBe(1);
    })
})