import React, { useState } from 'react';
import { useParams } from 'react-router-dom'
import { updateUsers } from '../redux/actions/users';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Forms from '../components/Forms'
import { useEffect } from 'react';

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
    left: 330,
    height: 56,
  },
}));

export default function EditUser(props) {
  const classes = useStyles()
  const dispatch = useDispatch()
  const history = useHistory()
  const { id } = useParams()
  const users = useSelector(state => state.users.users)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [age, setAge] = useState('')

  const handleUpdate = () => {
    if (name === '' || email === '') {
      alert('Os campos nome e email são obrigatórios.')
    } else {
      if (window.confirm('Deseja alterar os dados?')) {
        dispatch(updateUsers({
          id: id,
          name: name,
          email: email,
          age: age
        }))
        history.push('/edit')
      }
    }
  }

  const handleClose = () => {
    history.push('/edit')
  }

  useEffect(() => {
    // eslint-disable-next-line eqeqeq
    const filterUser = users.filter((user) => user.id == (id))
    filterUser.forEach((e) => {
      setName(e.name)
      setEmail(e.email)
      setAge(e.age)
    })
  }, [id, users])

  return (
    <div >
      <div className={classes.body}>
        <Forms
          onClick={handleUpdate}
          name={name}
          changeName={(event) => setName(event.target.value)}
          email={email}
          changeEmail={(event) => setEmail(event.target.value)}
          age={age}
          changeAge={(event) => setAge(event.target.value)}
        />
        <Button
          className={classes.button}
          color="primary"
          variant="contained"
          aria-label="cancel"
          onClick={handleClose}
        >
          Cancelar
        </Button>
      </div>
    </div>
  );
}