import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setUsers } from '../redux/actions/users';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Table from '../components/Table'
import usersDB from '../database'

const useStyles = makeStyles({
  root: {
    width: '80%',
  },
});

export default function Home() {
  const dispatch = useDispatch()
  const users = useSelector(state => state.users.users)
  const classes = useStyles();
  const history = useHistory()
  const token = localStorage.getItem('token')

  useEffect(() => {
    if (token === '654321') {
      if (users.length > 0) {
        return users
      } else {
        dispatch(setUsers(usersDB))
      }
    } else {
      history.push('/login')
    }
  }, [dispatch, history, token, users])

  return (
    <div className={classes.root}>
      <Table state={users} />
    </div>
  );
}