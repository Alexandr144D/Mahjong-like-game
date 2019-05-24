import '../style.css';
import React from 'react';
import PropTypes from 'prop-types';
import Paper from '../../../components/PaperComponent';


const BoardComponent = (props) => {
    return (
        <div className='game-board'>
            {
                props.rootReducer.gameBoard.map((item, index) => {
                    return (
                        <Paper
                            {...props}
                            key={index}
                            item={item}
                            index={index}
                            checked={item.checked}
                        />)
                })
            }
        </div>
    )
};

BoardComponent.propTypes = {
    props: PropTypes.object,
};

export default BoardComponent;
