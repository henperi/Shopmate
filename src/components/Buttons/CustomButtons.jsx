import React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  root: {
    textTransform: 'capitalize',
  },
  chubby: {
    borderRadius: chubby => chubby && theme.spacing(2.5),
  },
}));
const CustomButton = ({ chubby, ...props }) => {
  const classes = useStyles(chubby);

  return (
    <Button {...props} className={clsx(classes.root, classes.chubby)}>
      {props.children}
    </Button>
  );
};

CustomButton.propTypes = {
  chubby: PropTypes.bool,
};

CustomButton.defaultProps = {
  chubby: false,
};

export default CustomButton;
