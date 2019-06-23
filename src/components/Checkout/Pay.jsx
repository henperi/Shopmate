import React, { useState } from 'react';
import {
  Grid, makeStyles, withStyles, TextField,
} from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import MaskedInput from 'react-text-mask';

import clsx from 'clsx';
import Text from '../Text/Text';
import visaImage from '../../assets/images/visa.png';
import payPalImage from '../../assets/images/payPal.png';

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
  },
  paySelector: {
    backgroundColor: theme.palette.grey[200],
    border: `1px solid ${theme.palette.grey[300]}`,
    borderRadius: '2px',
    padding: '20px 20px',
    cursor: 'pointer',
    height: '120px',
  },
  selected: {
    backgroundColor: '#F3F6F9',
    border: '1px solid #6EB2FB',
  },
  radio: {
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
  },
  cvvHelperText: {
    marginTop: '40px',
    [theme.breakpoints.down('sm')]: {
      marginTop: '0',
    },
  },
}));

const CustomRadio = withStyles(theme => ({
  root: {
    color: theme.palette.grey[400],
    '&$checked': {
      color: '#6EB2FB',
    },
  },
  checked: {},
}))(props => <Radio color="default" {...props} />);

const ValidThruMask = (props) => {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[/\d/, /\d/, '/', /\d/, /\d/]}
      // placeholderChar="/"
      // showMask
    />
  );
};

const CreditCardMask = (props) => {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        ' ',
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        ' ',
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        ' ',
        /\d/,
        /\d/,
        /\d/,
        /\d/,
      ]}
      placeholderChar="*"
      // showMask
    />
  );
};
const Pay = () => {
  const [paymentMethod, setPaymentMethod] = useState(null);

  const classes = useStyles();

  const handlePaymentSelect = (value) => {
    setPaymentMethod(value);
  };

  const handleRadioChange = (event) => {
    handlePaymentSelect(event.target.value);
  };

  return (
    <Grid container spacing={2} className={classes.root}>
      <Grid item xs={12} md={6}>
        <div
          className={clsx(classes.paySelector, paymentMethod === 'visa' && classes.selected)}
          onClick={() => handlePaymentSelect('visa')}
          role="presentation"
        >
          <img src={visaImage} alt="Visa" />
          <div className={classes.radio}>
            <CustomRadio
              checked={paymentMethod === 'visa'}
              onChange={handleRadioChange}
              value="visa"
              name="radio-button-demo"
              inputProps={{ 'aria-label': 'C' }}
            />
            <Text classnames={['body1']} weight={900} margin="10px 0">
              Pay £340.00 with credit card
            </Text>
          </div>
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <div
          className={clsx(classes.paySelector, paymentMethod === 'paypal' && classes.selected)}
          onClick={() => handlePaymentSelect('paypal')}
          role="presentation"
        >
          <img src={payPalImage} alt="PayPal" />
          <div className={classes.radio}>
            <CustomRadio
              checked={paymentMethod === 'paypal'}
              onChange={handleRadioChange}
              value="paypal"
              name="radio-button-demo"
              inputProps={{ 'aria-label': 'C' }}
            />
            <Text classnames={['body1']} weight={900} margin="10px 0">
              Pay £340.00 with PayPal
            </Text>
          </div>
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <Text classnames={['body1']} weight={900} margin="10px 0 0 0" style={{ textAlign: 'left' }}>
          Cardholders Name
        </Text>
        <TextField
          id="outlined-name"
          className={classes.textField}
          margin="dense"
          variant="outlined"
          fullWidth
          type="text"
          autoComplete="name"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Text classnames={['body1']} weight={900} margin="10px 0 0 0" style={{ textAlign: 'left' }}>
          Card Number
        </Text>
        <TextField
          id="outlined-name"
          className={classes.textField}
          margin="dense"
          variant="outlined"
          fullWidth
          placeholder="**** **** **** ****"
          autoComplete="cc-number"
          InputProps={{ inputComponent: CreditCardMask }}
        />
      </Grid>
      <Grid item xs={6} md={3}>
        <Text classnames={['body1']} weight={900} margin="10px 0 0 0" style={{ textAlign: 'left' }}>
          Valid Through
        </Text>
        <TextField
          id="outlined-name"
          label="MM/YY"
          className={classes.textField}
          margin="dense"
          variant="outlined"
          fullWidth
          placeholder="04/19"
          autoComplete="cc-exp"
          InputProps={{ inputComponent: ValidThruMask }}
        />
      </Grid>
      <Grid item xs={6} md={3}>
        <Text classnames={['body1']} weight={900} margin="10px 0 0 0" style={{ textAlign: 'left' }}>
          CVV / CVC *
        </Text>
        <TextField
          id="outlined-name"
          label="CVV / CVC *"
          className={classes.textField}
          margin="dense"
          variant="outlined"
          fullWidth
          placeholder="237"
          autoComplete="cc-csc"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <div className={classes.cvvHelperText}>
          <Text
            classnames={['body2']}
            weight={100}
            margin="10px 0 0 0"
            style={{ textAlign: 'left' }}
          >
            * CVV or CVC is the card security code, unique three digits number on the back of your
            card separate from its number.
          </Text>
        </div>
      </Grid>
    </Grid>
  );
};

export default Pay;
