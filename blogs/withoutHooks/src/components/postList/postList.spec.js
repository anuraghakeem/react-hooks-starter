import React from 'react';
import { shallow } from 'enzyme';
import { PostList} from './PostList';


describe('PostList Component', () => {
    it('Should render without errors ', () => {
        const component = shallow(<PostList/>);
        const wrapper = component.find('.getPostList');
        expect(wrapper.length).toBe(1);
    })
})