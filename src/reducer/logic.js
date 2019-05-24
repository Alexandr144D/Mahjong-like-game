import _ from 'lodash'

/**
 * Function that return an Array with 16 doubled, non-repeated values;
 * @returns {this}
 */
export function randomizer() {
    let array = [];

    do {
        array.push(Math.round(Math.random() * 100));
        array = _.uniq(array);
    } while (array.length < 18);

    let newArray = [...array, ...array];

    const arr = [];
    newArray.forEach((item) => {
        arr.push({value: item, isHidden: true, isSelected: false, colored: false});
    });

    function compareRandom() {
        return Math.random() - 0.5;
    }
    return arr.sort(compareRandom);
}

/**
 * This function returns "true" if all the field of the board are opened.
 * @param array : Is an Array of gameBoard values.
 * @returns {*}
 */
export function checkIfAllColored(array) {
    function isSelected(item) {
        return item.colored === true;
    }

    return array.every(isSelected);
}
