import React from 'react';
import {
  Box,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import { CustomerProps } from '@nx-mern/types';

export function CustomerList({ customers }: { customers: CustomerProps[] }) {
  const tomorrow = new Date();
  const getDate = tomorrow.setDate(tomorrow.getMonth() + 1);

  return (
    <>
      <Box pt={4} />
      <List>
        {customers.map((n, index) => {
          return (
            <React.Fragment key={index}>
              <Box mt={index !== 0 ? 3 : 0} />
              <Box boxShadow={1} bgcolor="background.paper">
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <PersonIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={n.name}
                    secondary={new Date(
                      tomorrow.setDate(tomorrow.getMonth() - index)
                    ).toDateString()}
                  />
                </ListItem>
              </Box>
            </React.Fragment>
          );
        })}
      </List>
    </>
  );
}
