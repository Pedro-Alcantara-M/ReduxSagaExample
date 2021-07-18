import { useHistory } from "react-router-dom";
import { createStyles, makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Button,
  Link,
  Toolbar,
} from '@material-ui/core'
import { NavLink } from 'react-router-dom'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,

      '& a': {
        '&:hover': {
          boxShadow: '#fff',
        },
      },
    },

    button: {
      marginLeft: 'auto',
      height: 56,
    },

    link: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      color: '#fff',
      fontSize: '1.5rem',
      textDecoration: 'none',
      padding: 10,
      borderRadius: 10,
    },

    logout: {
      position: 'absolute',
      right: 50,
      top: -10,
      color: '#fff',
      fontSize: '1.5rem',
      margin: theme.spacing(1),
      fontWeight: 400,
      textDecoration: 'none',
      textTransform: 'none',
      padding: 10,
      borderRadius: 10,
    },

    active: {
      color: '#000',
      background: '#fff',
      margin: 8,
    },
  }),
);

export default function Navbar() {
  const classes = useStyles();
  const history = useHistory()

  const handleLogout = () => {
    localStorage.removeItem('token')
    history.push('/login')
  }
  


  return (
    <div >
      <AppBar position="static">
        <Toolbar className={classes.root}>
          <div className={classes.listLink}>
            <NavLink to="/login" className={classes.link} activeClassName={classes.active}>
              Login
            </NavLink>
            <NavLink exact to="/" className={classes.link} activeClassName={classes.active}>
              Home
            </NavLink>
            <NavLink to="/edit" className={classes.link} activeClassName={classes.active}>
              Edit
            </NavLink>
            <Link>
              <Button className={classes.logout} onClick={handleLogout}>
                Logout
              </Button>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
