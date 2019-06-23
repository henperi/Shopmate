import React from 'react';
import {
  Grid, makeStyles, withStyles, Divider,
} from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Text from '../Text/Text';
import SubscriptionButton from '../Buttons/SubscriptionButton';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 350,
  },
}));

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.grey[200],
    },
    border: 'none',
  },
}))(TableRow);

const Confirmation = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={2} justify="space-between">
      <Grid item xs={12} md={6}>
        <Text classnames={['h3']} margin="20px 0">
          Order summary
        </Text>
        <div className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Text classnames={['body1']} weight={800}>
                    Item
                  </Text>
                </TableCell>
                <TableCell align="center">
                  <Text classnames={['body1']} weight={800}>
                    Qty
                  </Text>
                </TableCell>
                <TableCell>
                  <Text classnames={['body1']} weight={800}>
                    Price
                  </Text>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <StyledTableRow>
                <TableCell component="th" scope="row">
                  <Text classnames={['body1']}>Price</Text>
                </TableCell>
                <TableCell align="center">
                  <Text classnames={['body1']}>Price</Text>
                </TableCell>
                <TableCell>
                  <Text color="primary" classnames={['body1']}>
                    Price
                  </Text>
                </TableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <Text classnames={['h3']} margin="20px 0">
          Delivery
        </Text>
        <Text classnames={['body1']} weight={1000} margin="40px 0 20px">
          Address
        </Text>
        <Text classnames={['body1']} weight={200} margin="20px 0">
          Office 64, 8 Colmore Row, Birmingham, England, 42000
        </Text>
        <Text classnames={['body1']} weight={1000} margin="20px 0">
          Delivery options
        </Text>
        <Text classnames={['body1']} weight={200} margin="20px 0">
          Standart delivery (free, 2-3 days)
        </Text>
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
      <Grid item xs={12} md={6}>
        <SubscriptionButton label="Apply" placeholder="Coupon Code" />
      </Grid>
      <Grid item xs={4} md={2}>
        <Text classnames={['body1']} weight={800}>
          Subtotal
        </Text>
        <Text classnames={['h3']} weight={400}>
          £368
        </Text>
      </Grid>
      <Grid item xs={4} md={2}>
        <Text classnames={['body1']} weight={800}>
          Shipping
        </Text>
        <Text classnames={['h3']} weight={400}>
          Free
        </Text>
      </Grid>
      <Grid item xs={4} md={2}>
        <Text classnames={['body1']} weight={800}>
          Grandtotal
        </Text>
        <Text classnames={['h2']} weight={400}>
          £348
        </Text>
      </Grid>
    </Grid>
  );
};

export default Confirmation;
