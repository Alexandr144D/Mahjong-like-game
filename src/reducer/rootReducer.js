import * as constants from './constants';

const initialStore = {
    gameBoard: [],
    chosenCell1: undefined,
    chosenCell2: undefined,
    isNewGameButtonVisible: false
};

const rootReducer = (state = initialStore, action) => {
    switch (action.type) {
        case constants.START_GAME:
            return {
                ...state,
                gameBoard: action.payload,
            };

        case constants.START_NEW_GAME:
            return {
                ...state,
                gameBoard: action.payload,
                chosenCell1: undefined,
                chosenCell2: undefined,
                isNewGameButtonVisible: false
            };

        case constants.UPDATE_CHOSEN_IF_1:
            const copy1 = state.gameBoard.slice();
            copy1[action.index].isHidden = false;

            return {
                ...state,
                chosenCell1: action.index,
                gameBoard: copy1
            };

        case constants.UPDATE_CHOSEN_IF_2:
            const copy2 = state.gameBoard.slice();
            copy2[action.index].isHidden = false;

            return {
                ...state,
                chosenCell2: action.index,
                gameBoard: copy2
            };

        case constants.HIDE_2_LAST_VALUES:
            const copy3 = state.gameBoard.slice();
            copy3[state.chosenCell1].isHidden = true;
            copy3[state.chosenCell2].isHidden = true;

            return {
                ...state,
                chosenCell1: undefined,
                chosenCell2: undefined,
                gameBoard: copy3
            };

        case constants.COLOR_2_LAST_VALUES:
            const copy4 = state.gameBoard.slice();
            copy4[state.chosenCell1].colored = true;
            copy4[state.chosenCell2].colored = true;

            return {
                ...state,
                chosenCell1: undefined,
                chosenCell2: undefined,
                gameBoard: copy4
            };

        case constants.SHOW_START_NEW_GAME:
            return {
                ...state,
                isNewGameButtonVisible: true
            };

        default:
            return state
    }
};

export default rootReducer;
