import React from 'react';
import { shallow } from 'enzyme';
import Toggle from './toggle';

describe('Testing a Class component', () => {
    describe('Toggle', () => {
        describe('Behavioural (Integration)', () => {
            const wrapper = shallow(<Toggle />);
            it('renders a button with "Toggle" as children', () => {
                expect(wrapper.find('button')).toHaveLength(1);
            });
            it('renders "Toggled" as button children if button is clicked', () => {
                wrapper.find('button').simulate('click');
                expect(wrapper.find('button').text()).toEqual('Toggled');
            });
            it('renders "Toggle" as button children if button is clicked again', () => {
                wrapper.find('button').simulate('click');
                expect(wrapper.find('button').text()).toEqual('Toggle Now');
            });
        });

        describe('Component (Unit)', () => {
            const wrapper = shallow(<Toggle />);
            describe('Toggle function', () => {
                it('toggles "toggled" variable in state', () => {
                    expect(wrapper.state('toggled')).toBe(false);
                    wrapper.instance().toggle();// is  a virtual dom
                    expect(wrapper.state('toggled')).toBe(true);
                });
            });
        });
    })
});