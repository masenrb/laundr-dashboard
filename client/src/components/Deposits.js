import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import orderData from '../Order_Data.json';
import subData from '../Subscription_Data.json';
import userData from '../User_Data.json';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Laundr Summary</Title>
      <Typography component="p" variant="h6">
        Total Users
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        {Object.keys(userData).length}
      </Typography>
      <Typography component="p" variant="h6">
        Active Subscriptions
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        {Object.keys(subData).length}
      </Typography>
      <Typography component="p" variant="h6">
        Lifetime Orders
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        {Object.keys(orderData).length}
      </Typography>
    </React.Fragment>
  );
}
