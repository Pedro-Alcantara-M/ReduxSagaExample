import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  TableCell,
  TableRow,
} from '@material-ui/core';
import { Link } from "react-router-dom"
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { removeUsers } from '../redux/actions/users';
import { useDispatch } from 'react-redux'

const useStyles = makeStyles((theme) => ({

  table: {
    minWidth: 650,
  },

  button: {
    marginRight: theme.spacing(1),
  },
}))

export default function TableList(props) {
  const classes = useStyles();
  const dispatch = useDispatch()

  const handleDelete = () => {
    if (window.confirm('Deseja remover os dados?')){
      dispatch(removeUsers(props.id))
    }
  }


  return (
    <>
      <TableRow key={props.id}>
        <TableCell component="th" scope="row">
          {props.name}
        </TableCell>
        <TableCell align="center">{props.email}</TableCell>
        <TableCell align="center">{props.age} </TableCell>
        {props.button
          ?
          <>
          <Link to={`/edit/${props.id}`}>
            <Button
              className={classes.button}
              color="primary"
              variant="contained"
              aria-label="Edit"
            >
              <EditIcon />
            </Button>
          </Link>

            <Button
              className={classes.button}
              onClick={handleDelete}
              color="primary"
              variant="contained"
              aria-label="Delete"
            >
              <DeleteIcon />
            </Button>
          </>
      :
      <></>
        }
    </TableRow>

    </>
  );
}