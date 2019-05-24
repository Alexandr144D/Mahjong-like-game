import * as constants from './constants';
import {randomizer, checkIfAllColored} from './logic';


/**
 * Action that launches the game when click 'Start" button at the ENTRY page.
 * @returns {Function}
 */
export const startGameAction = () => (dispatch) => {
    dispatch({type: constants.START_GAME, payload: randomizer()});
};

/**
 * Action that keeps all LOGIC for the table (click at diff of equal board cells, make them hidden or colored)
 * @param index : Is an index of clicked board cell.
 * @returns {Function}
 */
export const updateTable = index => (dispatch, getState) => {
    if (isNaN(getState().rootReducer.chosenCell1)) {
        return dispatch({type: constants.UPDATE_CHOSEN_IF_1, index})
    }
    if (isNaN(getState().rootReducer.chosenCell2)) {
        /** Checks if user is clicking the same value more the one time */
        if (getState().rootReducer.chosenCell1 === index) {
            return null
        }
        dispatch({type: constants.UPDATE_CHOSEN_IF_2, index});


        setTimeout(() => {
            const chosenCell1 = getState().rootReducer.chosenCell1;
            const chosenCell2 = getState().rootReducer.chosenCell2;
            const gameBoard = getState().rootReducer.gameBoard;
            const value1 = gameBoard[chosenCell1].value;
            const value2 = gameBoard[chosenCell2].value;


            if (value1 === value2) {
                dispatch({type: constants.COLOR_2_LAST_VALUES});

                /** Run function to check if there is any unopened board cell. If "TRUE", show the "Start new Game" Button */
                if (checkIfAllColored(gameBoard)) {
                    dispatch({type: constants.SHOW_START_NEW_GAME});
                } else {
                    return null
                }
            }
            if (value1 !== value2) {
                return dispatch({type: constants.HIDE_2_LAST_VALUES})
            }
        }, 200)
    }
};


/**
 * Action that starts a new game, after the game has been finished.
 * @returns {function(*): *}
 */
export const newGameStartAction = () => (dispatch) => {
    return dispatch({type: constants.START_NEW_GAME, payload: randomizer()})
};
