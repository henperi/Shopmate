import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import clsx from 'clsx';

// H1  /  font: PlayfairDisplay-Bold  /  size: 48px  /  color: #2E2E2E /  line: 150%
const useStyles = makeStyles(theme => ({
  h1: {
    fontFamily: 'Playfair Display',
    fontSize: theme.spacing(6),
    color: props => !props.color && '#2E2E2E',
    lineHeight: '150%',
    fontWeight: props => props.weight,
    padding: props => props.padding,
    margin: props => props.padding,
  },
  h2: {
    fontFamily: 'Montserrat',
    fontSize: theme.spacing(3),
    color: props => !props.color && '#2E2E2E',
    lineHeight: '150%',
    fontWeight: props => props.weight,
    padding: props => props.padding,
    margin: props => props.padding,
  },
  h3: {
    fontFamily: 'Montserrat',
    fontSize: theme.spacing(2),
    color: props => !props.color && '#2E2E2E',
    lineHeight: '150%',
    fontWeight: props => props.weight,
    padding: props => props.padding,
    margin: props => props.padding,
  },
  topBar: {
    fontFamily: 'Montserrat',
    fontSize: theme.spacing(2),
    color: props => !props.color && '#2E2E2E',
    lineHeight: '240%',
    fontWeight: props => props.weight,
    padding: props => props.padding,
    margin: props => props.padding,
  },
  body1: {
    fontFamily: 'Open Sans',
    fontSize: theme.spacing(2),
    color: props => !props.color && '#6C6C6C',
    lineHeight: '150%',
    fontWeight: props => props.weight,
    padding: props => props.padding,
    margin: props => props.padding,
  },
  body2: {
    fontFamily: 'Open Sans',
    fontSize: theme.spacing(1.5),
    color: props => !props.color && '#6C6C6C',
    lineHeight: '200%',
    fontWeight: props => props.weight,
    padding: props => props.padding,
    margin: props => props.padding,
  },
}));

const Text = (props) => {
  const { children, classNames } = props;
  const classes = useStyles(props);

  return (
    <Typography
      className={classNames && clsx(classNames.map(className => classes[className]))}
      {...props}
    >
      {children}
    </Typography>
  );
};

export default Text;
