import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Button, Paper, TextField } from '@material-ui/core';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 400,
    height: 250,
  },

  form: {
    display: 'flex',
    flexDirection: 'column',
  },

  input: {
    margin: theme.spacing(1),
    width: 350,
  },

  button: {
    marginTop: theme.spacing(2),
  },
}));

export default function Login() {
  const classes = useStyles();
  const history = useHistory()
  const token = localStorage.getItem('token')
  const [user, setUser] = useState('')
  const [userPassword, setUserPassword] = useState('')

  const handleLogin = () => {
    if (user === 'admin' && userPassword === 'admin') {
      localStorage.setItem('token', '654321');
      history.push('/')

    } else {
      alert('usuario ou senha incorretos')
    }
  }

  useEffect(() => {
    if (token === '654321') {
      history.push('/')
    }
  }, [history, token])

  return (
    <div >
      <Paper elevation={3} className={classes.root}>
        <form className={classes.form} noValidate autoComplete="off">
          <TextField
            className={classes.input}
            id="outlined-basic" label="Usuario"
            variant="outlined"
            name="usuario"
            value={user}
            onChange={(event) => setUser(event.target.value)}
          />
          <TextField
            className={classes.input}
            id="standard-password-input"
            label="Senha"
            variant="outlined"
            type="password"
            name="senha"
            value={userPassword}
            onChange={(event) => setUserPassword(event.target.value)}
          />
          <Button
            className={classes.button}
            variant="contained" color="primary"
            onClick={handleLogin}
          >
            Login
          </Button>
        </form>
      </Paper>
    </div>
  );
}