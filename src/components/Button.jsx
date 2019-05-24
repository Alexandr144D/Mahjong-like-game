import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    button: {
        width: 200,
        margin: theme.spacing(1),
    },
}));

function ButtonComponent(props) {
    const classes = useStyles();

    return (
        <div>
            <Button
                color="primary"
                variant="contained"
                onClick={props.startGame}
                className={classes.button}> Start Game </Button>
        </div>
    );
}

ButtonComponent.propTypes = {
    props: PropTypes.object,
    classes: PropTypes.object,
};

export default ButtonComponent;
