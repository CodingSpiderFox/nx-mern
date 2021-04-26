import React, { useState } from 'react';
import axios from 'axios';
import { Grid, TextField, Button } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
export interface CustomerFormProps {
  getCustomers: () => void;
}

export function CustomerForm({ getCustomers }: CustomerFormProps) {
  const classes = useStyles();
  const [customerName, setCustomerName] = useState('');

  const saveCustomer = async (e) => {
    e.preventDefault();

    try {
      const customerData = {
        name: customerName,
      };
      await axios.post(`${process.env.NX_SITE_URL}/customer`, customerData);
      getCustomers();
      setCustomerName('');
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <Grid container justify="center">
      <Grid item xs={12} md={5}>
        <form onSubmit={saveCustomer} noValidate autoComplete="off">
          <Grid container wrap="nowrap">
            <TextField
              type="text"
              placeholder="Customer name"
              onChange={(e) => {
                setCustomerName(e.target.value);
              }}
              variant="outlined"
              value={customerName}
              className={classes.input}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Save
            </Button>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    input: {
      '& .MuiOutlinedInput-root': {
        'border-top-right-radius': 0,
        'border-bottom-right-radius': 0,
      },
    },
    button: {
      'border-top-left-radius': 0,
      'border-bottom-left-radius': 0,
      width: 130,
    },
  })
);
