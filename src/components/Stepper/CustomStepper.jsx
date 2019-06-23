import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import Text from '../Text/Text';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4, 8),
  },
  stepperContainer: {
    display: 'flex',
    padding: 0,
    justifyContent: 'space-between',
    height: '50px',
    paddingLeft: '20px',
  },
  step: {
    position: 'relative',
    listStyle: 'none',
    width: '80%',
    display: 'flex',
    alignItems: 'center',
    content: '" "',
    height: '6px',
    backgroundColor: theme.palette.grey[200],
    margin: 'auto 20px',
    '&:after': {
      content: '" "',
      lineHeight: '24px',
      borderRadius: '50%',
      width: '24px',
      height: '24px',
      backgroundColor: theme.palette.grey[200],
      display: 'flex',
      margin: '-8px -32px',
      textAlign: 'center',
    },
    '&:last-child': {
      content: 'none',
      width: 0,
    },
    '&:first-child': {
      backgroundColor: steps => (steps[1].completed ? theme.palette.primary.main : theme.palette.grey[200]),
    },
    '&:first-child:after': {
      backgroundColor: theme.palette.primary.main,
    },
  },
  stepText: {
    position: 'absolute',
    top: '30px',
    width: '100px',
    margin: '0 -72px',
    display: 'flex',
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
    '&:after': {
      backgroundColor: theme.palette.primary.main,
      transition: 'background 0.6s 0.3s, color 0.9s 2s',
    },
  },
}));

const CustomStepper = ({ steps }) => {
  const classes = useStyles(steps);

  return (
    <div className={classes.stepperContainer}>
      {steps.map(step => (
        <span key={step.name} className={clsx(classes.step, step.completed && classes.completed)}>
          <span className={classes.stepText}>
            <Text color={step.completed ? 'primary' : 'inherit'} classnames={['h3']}>
              {step.name}
            </Text>
          </span>
        </span>
      ))}
    </div>
  );
};

export default CustomStepper;
