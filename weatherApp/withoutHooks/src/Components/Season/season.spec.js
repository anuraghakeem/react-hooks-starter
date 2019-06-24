import React from 'react';
import {shallow} from 'enzyme';
import checkPropTypes from 'check-prop-types';
import Season from './Season';

describe('Season Component', () => {
    describe('Checking proptypes', () => {
        it('Should not throw a warning',() => {
            const expectedProps = {
                lat : 'Test lat'
            }
            const propsError = checkPropTypes(Season.propTypes,expectedProps,'props',Season.name);
            expect(propsError).toBeUndefined();
        })
    })

    it('Should render season component without errors', () => {
        const component = shallow(<Season/>);
        const wrapper = component.find('.getSeason');
        expect(wrapper.length).toBe(1);
    })
})