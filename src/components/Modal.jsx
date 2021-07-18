import React, {useState} from 'react';
import { useSelector, useDispatch} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Button } from '@material-ui/core';
import Forms from './Forms'



const useStyles = makeStyles((theme) => ({
  body: {
    position: 'absolute',
    top: "40%",
    left: "25%",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 900,
    height: 200,
    backgroundColor: theme.palette.background.paper,

    "& input": {
      width: '20ch',
    },
  },
  paper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },

  button: {
    position: 'absolute',
    top: 107,
    left: 300,
    height: 56,
  },
}));

export default function FormModal(props) {
  const classes = useStyles();

  

  return (
    <div >
      <Modal
        open={props.open}
        aria-labelledby="Edit User"
        aria-describedby="simple-modal-description"
      >
        <div className={classes.body}>
         {props.id? <span>{props.id}</span> : <span>SEM ID</span>}
          <Forms
            onClick={props.updateClick}
            name={props.nameUpdate}
            changeName={props.changeName}
            email={props.emailUpdate}
            changeEmail={props.changeEmail}
            age={props.ageUpdate}
            changeAge={props.changeAge}
          />
          <Button
            className={classes.button}
            color="primary"
            variant="contained"
            aria-label="cancel"
            onClick={props.onClose}
          >
            Cancelar
          </Button>
        </div>
      </Modal>
    </div>
  );
}