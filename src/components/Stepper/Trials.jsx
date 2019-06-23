import React from 'react';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import Text from '../Text/Text';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4, 8),
  },
  stepperContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '50px',
    position: 'relative',
  },
  step: {
    content: '" "',
    lineHeight: '24px',
    borderRadius: '50%',
    width: '24px',
    height: '24px',
    backgroundColor: theme.palette.grey[200],
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'flex-end',
    overflow: 'hidden',

    '&:before': {
      position: 'absolute',
      width: '30%',
      display: 'flex',
      content: '" "',
      height: '6px',
      backgroundColor: theme.palette.grey[200],
    },
    '&:first-child:before': {
      backgroundColor: 'red',
      display: 'none',
    },
    '&:first-child': {
      backgroundColor: theme.palette.primary.main,
    },
  },
  stepText: {
    display: 'flex',
    position: 'absolute',
    top: '30px',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  completed: {
    transform: '20px',
    backgroundColor: theme.palette.primary.main,
    transition: 'background 0.6s 0.3s, color 0.5s 0.6s',
    color: theme.palette.primary.main,
    '&:before': {
      backgroundColor: theme.palette.primary.main,
      transition: 'background 0.6s 0.3s, color 0.9s 2s',
    },
  },
}));

const CustomStepper1 = ({ steps }) => {
  const classes = useStyles(steps);

  return (
    <div className={classes.stepperContainer}>
      {steps.map(step => (
        <div key={step.name} className={clsx(classes.step, step.completed && classes.completed)}>
          <span className={classes.stepText}>
            <Text color={step.completed ? 'primary' : 'inherit'} classnames={['h3']}>
              {step.name}
            </Text>
          </span>
        </div>
      ))}
    </div>
  );
};

export default CustomStepper1;
