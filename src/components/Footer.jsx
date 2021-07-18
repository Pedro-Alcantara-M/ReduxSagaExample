import { createStyles, makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography
} from '@material-ui/core'

const useStyles = makeStyles(() =>
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
  }),
);

export default function Footer() {
  const classes = useStyles();

  return (
    <AppBar position="static">
        <Toolbar className={classes.root}>
        <Typography variant="h5">
           Teste <small>2021</small>
        </Typography>
        </Toolbar>
      </AppBar>
  );
}