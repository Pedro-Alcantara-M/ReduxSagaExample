import { Switch, Route } from "react-router-dom"
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Home from '../pages/Home'
import Login from '../pages/Login'
import Edit from '../pages/Edit'
import EditUser from '../pages/EditUser'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      flexGrow: 1,
      background: '#eceaea',
      height: '100%',
      minHeight: '83vh',
    },
  }),
);

export default function MainContent() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route exact path="/edit">
          <Edit />
        </Route>
        <Route exact path="/edit/:id">
          <EditUser />
        </Route>
      </Switch>
    </div>
  )
}