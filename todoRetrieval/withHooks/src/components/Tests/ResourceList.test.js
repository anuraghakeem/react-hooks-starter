import React from 'react';
import { shallow } from 'enzyme';

import ResourceList from './../ResourceList';
import { findByTestAtrr, checkProps } from './../../../Utils';

const setUp = (props={}) => {
    const component = shallow(<ResourceList {...props} />);
    return component;
};

describe('ResourceList Component', () => {
    describe('ResourceList Component Render', () => {
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
    describe('Checking PropTypes', () => {

        it('Should not throw a warning', () => {

            const expectedProps = {
                resource: 'Posts'
            }
            const propsErr = checkProps(ResourceList, expectedProps)
            expect(propsErr).toBeUndefined();
        });
    });
});
    
