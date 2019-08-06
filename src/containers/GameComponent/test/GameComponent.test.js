import React from 'react';
import {shallow, mount, render} from 'enzyme';
import GameComponent from '../GameComponent';
import BoardComponent from '../../GameComponent/component/BoardComponent';
import {Provider} from "react-redux";
import configureMockStore from "redux-mock-store";


const mockStore = configureMockStore();

describe("GameComponent", () => {

    let store;
    beforeEach(() => {
        store = mockStore({
            rootReducer: {
                gameBoard: [],
                chosenCell1: undefined,
                chosenCell2: undefined,
                isNewGameButtonVisible: false
            },
            history: {
                push: jest.fn()
            }
        });
    });

    it("should render without throwing an error", () => {
        const store = mockStore({
            rootReducer: {
                gameBoard: [],
                chosenCell1: undefined,
                chosenCell2: undefined,
                isNewGameButtonVisible: true
            },
            history: {
                push: jest.fn()
            }
        });
        const wrapper = mount(
            <Provider store={store}>
                <GameComponent/>
            </Provider>
        );

        expect(wrapper).toMatchSnapshot()
    });

    it("should render without throwing an error", () => {
        expect(shallow(<Provider store={store}><GameComponent/></Provider>)).toBeDefined()
    });

    it("should render without throwing an error", () => {
        const store = mockStore({
            rootReducer: {
                gameBoard: [],
                chosenCell1: undefined,
                chosenCell2: undefined,
                isNewGameButtonVisible: true
            },
            history: {
                push: jest.fn()
            }
        });
        const wrapper = mount(
            <Provider store={store}>
                <GameComponent/>
            </Provider>
        );
        expect(wrapper.find('BoardComponent').length).toEqual(1)
    });

    it("should show 'New game Button' when the game is finished", () => {
        const store = mockStore({
            rootReducer: {
                gameBoard: [],
                chosenCell1: undefined,
                chosenCell2: undefined,
                isNewGameButtonVisible: true
            },
            history: {
                push: jest.fn()
            }
        });

        const wrapper = mount(
            <Provider store={store}>
                <GameComponent/>
            </Provider>
        );

        expect(wrapper.find('button').length).toEqual(1);
        expect(wrapper.find('button').text()).toEqual('New Game')
    });

    it("should show 'New game Button' when the game is finished", () => {
        const store = mockStore({
            rootReducer: {
                gameBoard: [],
                chosenCell1: undefined,
                chosenCell2: undefined,
                isNewGameButtonVisible: false
            },
            history: {
                push: jest.fn()
            }
        });

        const wrapper = mount(
            <Provider store={store}>
                <GameComponent/>
            </Provider>
        );

        expect(wrapper.find('button').length).toEqual(0);
    });

});
