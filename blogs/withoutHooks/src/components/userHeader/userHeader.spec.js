import React from 'react';
import { shallow } from 'enzyme';
import checkPropTypes from 'check-prop-types';
import { UserHeader } from './UserHeader';

describe('UserHeader Component', () =>{
    describe('Checking proptypes', () => {
        it('Should not throw a warning', () => {
            const expectedProps = {
                userId: 1,
                user:{},
                fetchUser: () => {

                }
            }
            const propsError = checkPropTypes(UserHeader.propTypes, expectedProps, 'props', UserHeader.name);
            expect(propsError).toBeUndefined();
        })
    })
    
    describe('Component renders', () => {
        it('Should render without errors', () => {
            const props = {
                userId: 1,
                user:{},
                fetchUser: () => {
    
                }
            }
            const component = shallow(<UserHeader {...props}/>);
            const wrapper = component.find('.getUserHeader');
            expect(wrapper.length).toBe(1);
        })
    })

    describe('Component do not renders', () => {
        it('Should not render ', () => {
            const props = {
                userId: 1,
                fetchUser: () => {
    
                }
            }
            const component = shallow(<UserHeader {...props}/>);
            const wrapper = component.find('.getUserHeader');
            expect(wrapper.length).toBe(0);
        })
    })
    
})