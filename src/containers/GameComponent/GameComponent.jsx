import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import BoardComponent from './component/BoardComponent';
import {updateTable, newGameStartAction} from '../../reducer/actions'


class GameComponent extends React.Component {
    constructor(props) {
        super(props);

        this.newGame = this.newGame.bind(this);
    }

    componentDidMount() {
        if (!this.props.rootReducer.gameBoard.length) {
            this.props.history.push('/entry')
        }
    }

    upDateBoardState = (index) => {
        this.props.onUpdateBoardDispatch(index)
    };

    newGame() {
        this.props.onStartNewGameDispatch()
    }

    render() {
        const {isNewGameButtonVisible} = this.props.rootReducer;
        return (
            <div>
                <BoardComponent upDateBoardState={this.upDateBoardState} {...this.props} />
                {
                    isNewGameButtonVisible &&
                    <Button
                        color="primary"
                        variant="contained"
                        className='new-game-btn'
                        onClick={this.newGame}
                    >
                        New Game
                    </Button>
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state
};

const mapDispatchToProps = (dispatch) => {
    return {
        onUpdateBoardDispatch: (index) => {
            dispatch(updateTable(index))
        },
        onStartNewGameDispatch: () => {
            dispatch(newGameStartAction())
        }
    }
};

GameComponent.propTypes = {
    newGame: PropTypes.func,
    state: PropTypes.object,
    updateTable: PropTypes.func,
    upDateBoardState: PropTypes.func,
    newGameStartAction: PropTypes.func,
    isNewGameButtonVisible: PropTypes.bool,
    onUpdateBoardDispatch: PropTypes.func.isRequired,
    onStartNewGameDispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(GameComponent);
