import React from 'react';
import { shallow } from 'enzyme';
import checkPropTypes from 'check-prop-types';
import { PostList } from './PostList';


describe('PostList Component', () => {
    describe('Checking proptypes', () => {
        it('Should not throw a warning', () => {
            const expectedProps = {
                posts: [],
                fetchPost: () => {

                }
            }
            const propsError = checkPropTypes(PostList.propTypes, expectedProps, 'props', PostList.name);
            expect(propsError).toBeUndefined();
        })
    })

    describe('Component rendering', () => {
        it('Should render without errors ', () => {
            const props = {
                posts: [],
                fetchPost: () => {
    
                }
            }
            const component = shallow(<PostList {...props}/>);
            const wrapper = component.find('.getPostList');
            expect(wrapper.length).toBe(1);
        })

        // it('Should render post title', () => {
        //     const props = {
        //         posts: [],
        //         fetchPost: () => {
    
        //         }
        //     }
        //     const component = shallow(<PostList {...props}/>);
        //     const wrapper = component.find('.getPostTitle');
        //     expect(wrapper.length).toBe(1);
        // })

        // it('Should render post body ', () => {
        //     const props = {
        //         posts: [],
        //         fetchPost: () => {
    
        //         }
        //     }
        //     const component = shallow(<PostList {...props}/>);
        //     const wrapper = component.find('.getPostBody');
        //     expect(wrapper.length).toBe(1);
        // })
    })
    
})