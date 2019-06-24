import React from 'react';
import { shallow } from 'enzyme';

import App from './../App';
import { findByTestAtrr } from './../../../Utils';

const setUp = (props={}) => {
    const component = shallow(<App {...props} />);
    return component;
};

describe('App Component', () => {
    describe('UserList Component', () => {
        let component;
        beforeEach(() => {
            component = setUp(); 
        });
        
        it('Should render 1 user list component without errors', () => {
            const wrapper = findByTestAtrr(component, 'UserListComponent');
            // const wrapper = component.find('.UserListComponent');
            expect(wrapper.length).toBe(1);
        });
    });
    describe('Buttons Component', () => {
        let component;
        beforeEach(() => {
            component = setUp(); 
        });
        
        it('Should render 2 buttons without errors', () => {
            const wrapper = findByTestAtrr(component, 'buttonComponent');
            // const wrapper = component.find('.UserListComponent');
            expect(wrapper.length).toBe(2);
        });
    });
    describe('ResourceList Component', () => {
        let component;
        beforeEach(() => {
            component = setUp(); 
        });
        
        it('Should render 1 ResourceList without errors', () => {
            const wrapper = findByTestAtrr(component, 'ResourceListComponent');
            // const wrapper = component.find('.UserListComponent');
            expect(wrapper.length).toBe(1);
        });
    });
});