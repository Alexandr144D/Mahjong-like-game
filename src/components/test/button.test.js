import React from 'react';
import sinon from 'sinon'
import {shallow, mount, render} from 'enzyme';
import ButtonComponent from '../Button';


describe("Button component", () => {

    it("Button toMatchSnapShot", () => {
        const button = shallow(<ButtonComponent />);

        expect(button).toMatchSnapshot();
    });

    it("Button toBeDefined", () => {
        const button = shallow(<ButtonComponent />);

        expect(button).toBeDefined()
    });

    it("Button name 'Start Game'", () => {
        const button = shallow(<ButtonComponent />);

        expect(button.text()).toBe("Start Game")
    });

    it("Button name 'Start Game'", () => {
        const button = shallow(<ButtonComponent />);

        const clickCallback = sinon.spy();
        button.setProps({startGame: clickCallback});
        button.find('.makeStyles-button-1').simulate("click");

        sinon.assert.called(clickCallback);
    });
});
