import { makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@material-ui/core';
import TableList from './TableList';

const useStyles = makeStyles((theme) => ({

  table: {
    minWidth: 650,
  },

  button: {
    marginRight: theme.spacing(1),
  },
}))

export default function UserTable(props) {
  const classes = useStyles();



  return (
    <TableContainer className={classes.root} component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Idade</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.state.map((item) => (
            <TableList
              id={item.id}
              name={item.name}
              email={item.email}
              age={item.age}
              button={props.button}
              delete={props.delete}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}