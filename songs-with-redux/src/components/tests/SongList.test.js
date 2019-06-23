import React from 'react';
import { shallow } from 'enzyme';
import { createStore } from 'redux';

import SongListComponent from './../SongList'
import { findByTestAtrr } from './../../../Utils';
import reducers from './../../reducers';

const setUp = (props={}) => {
    const component = shallow(<SongListComponent store={createStore(reducers)} />);
    // console.log(store.state);
};

describe('SongList Component', () => {
    // describe('Have NO props', () => {

    //     let wrapper;
    //     beforeEach(() => {
    //         wrapper = setUp();
    //     });

    //     it('Should not render', () => {
    //         const component = findByTestAtrr(wrapper, 'songListComponent');
    //         expect(component.length).toBe(0);
    //     });

    // });

    describe('Component Renders', () => {

        let wrapper;
        beforeEach(() => {
            const props = {
                songs: [ 
                    {title:'Avengers: Infinity War',rating:'8.5'},
                    {title:'Spider-Man: Into the Spider-Verse',rating:'8.5'},
                    {title:'Green Book',rating:'8.2'},
                    {title:'Bohemian Rhapsody',rating:'8.0'}
                ]
            };
            wrapper = shallow(<SongListComponent {...props} store={createStore(reducers)}/>);
        });

        it('Should renders without error', () => {
            const component = findByTestAtrr(wrapper, 'songListComponentItem');
            expect(component.length).toBe(4);
        });

        // it('Should render a title', () => {
        //     const title = findByTestAtrr(wrapper, 'componentTitle');
        //     expect(title.length).toBe(1);
        // });

        // it('Should render a desc', () => {
        //     const desc = findByTestAtrr(wrapper, 'componentDesc');
        //     expect(desc.length).toBe(1);
        // });


    });

});