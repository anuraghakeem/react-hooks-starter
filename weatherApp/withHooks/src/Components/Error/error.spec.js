import React from 'react';
import {shallow} from 'enzyme';
import checkPropTypes from 'check-prop-types';
import Error from './Error';

describe('Error Component', () => {
    describe('Checking props', () => {
        it('Should not give a warning', () => {
            const expectedProps = {
                message : 'Test message'
            }
            const propsError = checkPropTypes(Error.propTypes,expectedProps,'props',Error.name);
            expect(propsError).toBeUndefined();
        })
    })

    it('Should render error component without errors', () => {
        const component = shallow(<Error/>);
        const wrapper = component.find('.getError');
        expect(wrapper.length).toBe(1);
    })
})