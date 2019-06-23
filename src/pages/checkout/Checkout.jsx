import React, { useState } from 'react';
import {
  Grid, Box, Paper, makeStyles,
} from '@material-ui/core';

import LightFooter from '../../components/Footers/LightFooter';
import Text from '../../components/Text/Text';
import CustomButton from '../../components/Buttons/CustomButtons';
import CustomStepper1 from '../../components/Stepper/Trials';
import Delivery from '../../components/Checkout/Delivery';
import Confirmation from '../../components/Checkout/Confirmation';
import Finish from '../../components/Checkout/Finish';
import Pay from '../../components/Checkout/Pay';
import LinkRouter from '../../components/LinkRouter/LinkRouter';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4, 8),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1, 4),
    },
  },
  form: {
    padding: theme.spacing(4, 0),
  },
  checkoutNav: {
    backgroundColor: theme.palette.grey[200],
    padding: theme.spacing(4, 8),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2, 4),
    },
  },
  component: {
    height: '350px',
    overflowY: 'auto',
    padding: '20px',
    [theme.breakpoints.down('xs')]: {
      height: '400px',
    },
  },
}));

const Checkout = () => {
  const [steps, setSteps] = useState([
    {
      name: 'Delivery',
      requiredData: {},
      completed: true,
      component: Delivery,
    },
    {
      name: 'Confirmation',
      requiredData: {},
      completed: false,
      component: Confirmation,
    },
    {
      name: 'Payment',
      requiredData: {},
      completed: false,
      component: Pay,
    },
    {
      name: 'Finish',
      requiredData: {},
      completed: false,
      component: Finish,
    },
  ]);

  const [currentStep, setCurrentStep] = useState(1);

  const handleClickNext = () => {
    if (currentStep < steps.length) {
      const updateSteps = Object.assign([], steps, {
        [currentStep]: { ...steps[currentStep], completed: true },
      });

      setSteps([...updateSteps]);
      setCurrentStep(currentStep + 1);
    }
  };

  const handleClickBack = () => {
    if (currentStep > 1 && currentStep <= steps.length) {
      const updateSteps = Object.assign([], steps, {
        [currentStep - 1]: { ...steps[currentStep - 1], completed: false },
      });

      setSteps([...updateSteps]);
      setCurrentStep(currentStep - 1);
    }
  };

  const classes = useStyles();

  const renderComponent = () => {
    const Component = steps[currentStep - 1].component;
    return <Component />;
  };

  return (
    <main>
      <Box mx={3} my={5}>
        <Paper>
          <Grid container spacing={2} className={classes.root}>
            <Grid item xs={12}>
              <Text classnames={['h2']}>Checkout</Text>
            </Grid>
            <Grid item xs={12}>
              <CustomStepper1 steps={steps} />
            </Grid>
            <Grid item xs={12} className={classes.component}>
              {renderComponent()}
            </Grid>
          </Grid>

          {currentStep < steps.length ? (
            <Grid container justify="space-between" className={classes.checkoutNav}>
              <CustomButton
                color="default"
                style={{ color: '#F62F5E', backgroundColor: 'white' }}
                variant="contained"
                aria-label="Add"
                size="large"
                chubby
                onClick={handleClickBack}
              >
                Back
              </CustomButton>
              <CustomButton
                color="primary"
                variant="contained"
                aria-label="Add"
                size="large"
                chubby
                onClick={handleClickNext}
              >
                {currentStep === 3 ? 'Pay' : 'Next'}
              </CustomButton>
            </Grid>
          ) : (
            <Grid container justify="center" className={classes.root}>
              <LinkRouter to="/shop">
                <CustomButton
                  color="primary"
                  variant="contained"
                  aria-label="Add"
                  size="large"
                  chubby
                  onClick={handleClickNext}
                >
                  Back To Shop
                </CustomButton>
              </LinkRouter>
            </Grid>
          )}
        </Paper>
      </Box>

      <LightFooter />
    </main>
  );
};

export default Checkout;
