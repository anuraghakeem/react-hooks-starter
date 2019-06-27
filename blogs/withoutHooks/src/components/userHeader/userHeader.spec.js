import React from 'react';
import { shallow } from 'enzyme';
import { UserHeader } from './UserHeader';

describe('UserHeader Component', () =>{
    it('Should render without errors', () => {
        const component = shallow(<UserHeader/>);
        const wrapper = component.find('.getUserHeader');
        expect(wrapper.length).toBe(0);
    })
})