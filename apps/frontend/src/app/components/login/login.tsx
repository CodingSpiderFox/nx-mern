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
  Card,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { getLoggedIn } = useAuth();
  const history = useHistory();

  const login = async (e) => {
    e.preventDefault();

    try {
      const loginData = {
        email,
        password,
      };

      await axios.post(`${process.env.NX_SITE_URL}/user/login`, loginData);
      await getLoggedIn();
      history.push('/customers');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <form onSubmit={login} autoComplete="off">
        <Container maxWidth="xs">
          <Grid
            container
            justify="center"
            direction="column"
            alignItems="center"
          >
            <Typography component="h1" variant="h5">
              Sign in
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
            <Box mt={1} />
            <Button type="submit" fullWidth variant="contained" color="primary">
              Login
            </Button>
            <Box mt={6} />
            <Typography component="h1" variant="h5">
              Test credentials
            </Typography>
            <Box mt={2} />
            <Card>
              <Box p={2}>
                <Typography>Email: admin@admin.com</Typography>
                <Box mt={2} />
                <Typography>Password: password123!</Typography>
              </Box>
            </Card>
          </Grid>
        </Container>
      </form>
    </div>
  );
}
