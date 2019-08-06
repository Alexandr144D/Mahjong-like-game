import React from 'react';
import sinon from 'sinon'
import {shallow, mount, render} from 'enzyme';
import PaperComponent from '../PaperComponent';
import PropTypes from "prop-types";


describe("PaperComponent", () => {
    it("PaperComponent toBeDefined", () => {
        const props = {
            index: 1,
            colored: false,
            isHidden: false,
            value: '1',
        };
        const component = render(
            <PaperComponent item={props}/>
        );

        expect(component).toBeDefined();
    });

    it("Renders Question icon if item.props.isHidden = true", () => {
        const props = {
            index: 1,
            colored: false,
            isHidden: true,
            value: '1',
        };
        const component = shallow(
            <PaperComponent item={props}/>
        );

        expect(component.find("QuestionIcon").length).toEqual(1)
    });

    it("Renders Number if item.props.isHidden = false", () => {
        const props = {
            index: 1,
            colored: false,
            isHidden: false,
            value: '1',
        };
        const component = shallow(
            <PaperComponent item={props}/>
        );

        expect(component.text()).toEqual("1")
    });
});
