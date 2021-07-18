import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {
  setUsers,
  addUsers,
} from '../redux/actions/users';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import nextId from "react-id-generator";
import Table from '../components/Table'
import Forms from '../components/Forms'
import usersDB from '../database'

const useStyles = makeStyles({
  root: {
    width: '80%',
  },
});

export default function Home(props) {
  const classes = useStyles();
  const history = useHistory()
  const dispatch = useDispatch()
  const userId =  nextId()
  const users = useSelector(state => state.users.users)
  const token = localStorage.getItem('token')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [age, setAge] = useState('')

  const handleAddClick = () => {
    if (name === '' || email === '') {
      alert('Os campos nome e email são obrigatórios.')
    } else {
      dispatch(addUsers({
        ...users,
        id: userId,
        name: name,
        email: email,
        age: age
      }))
      setName('')
      setEmail('')
      setAge('')
    }
  }

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
      <Forms
        add={true}
        onClick={handleAddClick}
        name={name}
        changeName={(event) => setName(event.target.value)}
        email={email}
        changeEmail={(event) => setEmail(event.target.value)}
        age={age}
        changeAge={(event) => setAge(event.target.value)}
      />
      <Table
        state={users}
        button={true}
      />
    </div>
  );
}