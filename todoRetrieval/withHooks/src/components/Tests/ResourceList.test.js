import React from 'react';
import { shallow } from 'enzyme';

import ResourceList from './../ResourceList';
import { findByTestAtrr } from './../../../Utils';

const setUp = (props={}) => {
    const component = shallow(<ResourceList {...props} />);
    return component;
};

describe('ResourceList Component', () => {
    let component;
    beforeEach(() => {
        component = setUp(); 
    });
    
    it('Should render 1 user list component without errors', () => {
        const wrapper = findByTestAtrr(component, 'ResourceListComp');
        // const wrapper = component.find('.UserListComponent');
        expect(wrapper.length).toBe(1);
    });

    
});
    
