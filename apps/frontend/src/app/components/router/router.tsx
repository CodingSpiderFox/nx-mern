import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useAuth } from '../../context';
import { Customers } from '../customers/customers';
import { Login } from '../login/login';
import { Navbar } from '../navbar/navbar';
import { Register } from '../register/register';
import { Container, Box } from '@material-ui/core';

export function Router() {
  const { loggedIn } = useAuth();
  return (
    <BrowserRouter>
      <Navbar />
      <Container>
        <Box pt={6} />
        <Switch>
          {loggedIn === false && (
            <>
              <Route exact path="/register">
                <Register />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Redirect from="*" to="/login" />
            </>
          )}
          {loggedIn === true && (
            <>
              <Route exact path="/customers">
                <Customers />
              </Route>
              <Redirect from="*" to="/customers" />
            </>
          )}
        </Switch>
      </Container>
    </BrowserRouter>
  );
}
