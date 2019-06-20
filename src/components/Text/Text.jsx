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
    margin: props => props.margin,
  },
  h2: {
    fontFamily: 'Montserrat',
    fontSize: theme.spacing(3),
    color: props => !props.color && '#2E2E2E',
    lineHeight: '150%',
    fontWeight: props => props.weight,
    padding: props => props.padding,
    margin: props => props.margin,
  },
  h3: {
    fontFamily: 'Montserrat',
    fontSize: theme.spacing(2),
    color: props => !props.color && '#2E2E2E',
    lineHeight: '150%',
    fontWeight: props => props.weight,
    padding: props => props.padding,
    margin: props => props.margin,
  },
  topBar: {
    fontFamily: 'Montserrat',
    fontSize: theme.spacing(2),
    color: props => !props.color && '#2E2E2E',
    lineHeight: '240%',
    fontWeight: props => props.weight,
    padding: props => props.padding,
    margin: props => props.margin,
  },
  body1: {
    fontFamily: 'Open Sans',
    fontSize: theme.spacing(2),
    color: props => !props.color && '#6C6C6C',
    lineHeight: '150%',
    fontWeight: props => props.weight,
    padding: props => props.padding,
    margin: props => props.margin,
  },
  body2: {
    fontFamily: 'Open Sans',
    fontSize: theme.spacing(1.5),
    color: props => !props.color && '#6C6C6C',
    lineHeight: '200%',
    fontWeight: props => props.weight,
    padding: props => props.padding,
    margin: props => props.margin,
  },
}));

const Text = (props) => {
  const { children, classnames } = props;
  const classes = useStyles(props);

  return (
    <Typography
      className={classnames && clsx(classnames.map(className => classes[className]))}
      {...props}
    >
      {children}
    </Typography>
  );
};

export default Text;
