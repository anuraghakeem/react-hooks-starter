import React from 'react';
import {shallow} from 'enzyme';
import checkPropTypes from 'check-prop-types';
import Season   from './Season';
import { getSeason } from "./getSeason";
import { seasonIcon } from './seasonIcon'

describe('Season Component', () => {
    describe('Checking Props', () => {
            it('Should not give a warning', () => {
                const expectedProps = {
                    lat : 'Test Lat'
                }
                const propsError = checkPropTypes(Season.propTypes, expectedProps, 'props', Season.name);
                expect(propsError).toBeUndefined();
            })
    })

    it('Should render season component without errors', () => {
        const component = shallow(<Season/>);
        const wrapper = component.find('.getSeason');
        expect(wrapper.length).toBe(1);
    })

    describe('Checking season name', () => {

        it('should give the summer season if the latitiude is negative', () => {
          const lat = -312412;
          const month = 10;
          if((month<2 || month>9) && lat < 0){
            expect(getSeason(lat,month)).toBe('Summer');
          }
        })

        it('should give the summer season if the latitude is positive', () => {
          const lat = 53878;
          const month = 6;
          if((month>2 && month<9) && lat > 0){
            expect(getSeason(lat,month)).toBe('Summer');
          }
        })

        it('should give the winter season if the latitude is positive', () => {
          const lat = 53878;
          const month = 10;
          if((month<2 || month>9) && lat > 0){
            expect(getSeason(lat,month)).toBe('Winter');
          }
        })

        it('should give the winter season if the latitude is negative', () => {
          const lat = -53878;
          const month = 7;
          if((month>2 && month<9) && lat < 0){
            expect(getSeason(lat,month)).toBe('Winter');
          }
        })

        it('should display the winter season', () => {
          const season = 'Winter';
          jest.fn(season);
          if(season === 'Winter'){
            expect(seasonIcon(season)).toStrictEqual({ text : 'Hey, its winter', iconName : 'snowflake'})
          }
        })

        it('should display the summer season', ()=> {
          const season = 'Summer';
          jest.fn(season);
          if(season === 'Summer'){
            expect(seasonIcon(season)).toStrictEqual({ text : 'Its Summer', iconName : 'sun'})
          }
        })
      });
})