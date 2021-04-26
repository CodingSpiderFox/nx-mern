import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../context';
import { Button } from '@material-ui/core';

export function LogOutBtn() {
  const { getLoggedIn } = useAuth();
  const history = useHistory();

  const logOut = async () => {
    await axios.get(`${process.env.NX_SITE_URL}/user/logout`);
    await getLoggedIn();
    history.push('/login');
  };
  return (
    <Button color="inherit" onClick={logOut}>
      Log out
    </Button>
  );
}
