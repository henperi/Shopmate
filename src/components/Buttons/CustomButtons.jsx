import React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  root: {
    textTransform: 'capitalize',
  },
  chubby: {
    borderRadius: props => props.chubby && theme.spacing(2.5),
  },
}));
const CustomButton = (props) => {
  const classes = useStyles(props);

  return (
    <Button {...props} className={clsx(classes.root, classes.chubby)}>
      {props.children}
    </Button>
  );
};

export default CustomButton;
