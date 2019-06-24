import React from 'react';
import { shallow } from 'enzyme';

import UserList from './../UserList';
import { findByTestAtrr } from './../../../Utils';

const setUp = (props={}) => {
    const component = shallow(<UserList {...props} />);
    return component;
};

describe('UserList Component', () => {
    let component;
    beforeEach(() => {
        component = setUp(); 
    });
    
    it('Should render 1 user list component without errors', () => {
        const wrapper = findByTestAtrr(component, 'UserListComp');
        // const wrapper = component.find('.UserListComponent');
        expect(wrapper.length).toBe(1);
    });

    
});
    
