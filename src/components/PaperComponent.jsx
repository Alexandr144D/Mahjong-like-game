import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import QuestionIcon from '../assets/icons/QuestionIcon';


const useStyles = makeStyles(theme => ({
    root: {
        margin: 1,
        minWidth: 50,
        minHeight: 30,
        display: 'flex',
        cursor: 'pointer',
        alignItems: 'center',
        position: 'relative',
        justifyContent: 'center',
        padding: theme.spacing(3, 2),
    },
    colored: {
        color: '#fff',
        background: 'rgba(0,0,0,0.7)',
    }
}));

function PaperSheet(props) {
    const {index} = props;
    const classes = useStyles();
    const {colored, isHidden, value} = props.item;


    return (
        <React.Fragment>
            <Paper
                className={`${classes.root} ${colored && classes.colored}`}
                onClick={colored ? null : () => props.upDateBoardState(index)}
            >
                <Typography variant="h5" component="h3">
                    {isHidden ? <QuestionIcon/> : value}
                </Typography>
            </Paper>
        </React.Fragment>
    );
}

PaperSheet.propTypes = {
    index: PropTypes.number,
    colored: PropTypes.bool,
    isHidden: PropTypes.bool,
    value: PropTypes.string,
    classes: PropTypes.object,
};


export default PaperSheet;
