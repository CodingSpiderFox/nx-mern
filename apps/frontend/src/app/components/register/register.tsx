import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../context';
import {
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  Avatar,
  Box,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

export function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVerify, setPasswordVerify] = useState('');

  const { getLoggedIn } = useAuth();
  const history = useHistory();

  const register = async (e) => {
    e.preventDefault();

    try {
      const registerData = {
        email,
        password,
        passwordVerify,
      };

      await axios.post(`${process.env.NX_SITE_URL}/user`, registerData);
      await getLoggedIn();
      history.push('/customers');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <form onSubmit={register} autoComplete="off">
        <Container maxWidth="xs">
          <Grid
            container
            justify="center"
            direction="column"
            alignItems="center"
          >
            <Typography component="h1" variant="h5">
              Register
            </Typography>
            <Box mt={2} />
            <Avatar>
              <LockOutlinedIcon />
            </Avatar>
            <Box mt={2} />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="passwordVerify"
              label="Verify password"
              type="password"
              id="passwordVerify"
              onChange={(e) => setPasswordVerify(e.target.value)}
              value={passwordVerify}
            />
            <Box mt={1} />
            <Button type="submit" fullWidth variant="contained" color="primary">
              Sign up
            </Button>
          </Grid>
        </Container>
      </form>
    </div>
  );
}
