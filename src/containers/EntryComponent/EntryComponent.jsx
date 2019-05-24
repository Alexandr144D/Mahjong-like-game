import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import ButtonComponent from '../../components/Button';
import {startGameAction} from '../../reducer/actions';


const Fragment = React.Fragment;

class EntryComponent extends React.Component {
    constructor(props) {
        super(props);

        this.startGame = this.startGame.bind(this);
    }

    startGame() {
        this.props.onStartGameDispatch();
        this.props.history.push('/game')
    }

    render() {
        return (
            <Fragment>
                <ButtonComponent startGame={this.startGame} />
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return state
};

const mapDispatchToProps = (dispatch) => {
    return {
        onStartGameDispatch: () => dispatch(startGameAction())
    }
};

EntryComponent.propTypes = {
    state: PropTypes.object,
    startGame: PropTypes.func,
    startGameAction: PropTypes.func,
    onStartGameDispatch: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EntryComponent));
