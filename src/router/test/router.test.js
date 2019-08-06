import React from 'react';
import {shallow, mount, render} from 'enzyme';
import Router from '../router';


describe('Router component', () => {

    it("Router to be rendered", () => {
        const wrapper = shallow(<Router/>);

        expect(wrapper).toBeDefined()
    });

    it("Roter component toMatchSnapshot", () => {
        const wrapper = shallow(<Router/>);

        expect(wrapper).toMatchSnapshot();
    });

    it("Router has 2 routes", () => {
        const wrapper = shallow(<Router/>);

        expect(wrapper.find('Route').get(0).props.path).toEqual('/entry')
        expect(wrapper.find('Route').get(1).props.path).toEqual('/game')
    });

});
