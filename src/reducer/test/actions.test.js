import * as constants from '../constants';
import * as actions from '../actions';
import {randomizer, checkIfAllColored} from '../logic';
import rootReducer from '../rootReducer';


const initialState = {
    gameBoard: [],
    chosenCell1: undefined,
    chosenCell2: undefined,
    isNewGameButtonVisible: false
};

describe("actions", () => {
    describe("start a game action", () => {
        it("should create action to start a game", () => {

        })
    })
});
