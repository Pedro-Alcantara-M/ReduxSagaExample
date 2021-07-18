import { createStyles, makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      margin: theme.spacing(1),
    },
    textField: {
      margin: theme.spacing(1),
      width: '50ch',
    },

    ageFild: {
      margin: theme.spacing(1),
    },

    button: {
      marginLeft: theme.spacing(1),
      transform: 'translatey(8px)',
      height: 55,
    },
  }),
);

export default function UserForms(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TextField
        className={classes.textField}
        value={props.name}
        onChange={props.changeName}
        label="Nome"
        id="outlined-size-normal"
        variant="outlined"
      />
      <TextField
        className={classes.textField}
        value={props.email}
        onChange={props.changeEmail}
        label="Email"
        id="outlined-size-normal"
        variant="outlined"
      />
      <TextField
        className={classes.ageFild}
        value={props.age}
        onChange={props.changeAge}
        label="idade"
        id="outlined-size-normal"
        variant="outlined"
      />
      <Button
        className={classes.button}
        onClick={props.onClick}
        color="primary"
        variant="contained"
        aria-label="Add"
      > {props.add
        ?
        <AddIcon />
        :
        <span>Editar</span>
      }
      </Button>

    </div>

  )
}