import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  thumbnail: {
    display: 'flex',
    width: props => (props.size ? props.size : theme.spacing(9)),
    height: props => (props.size ? props.size : theme.spacing(9)),
    overflow: 'hidden',
    justifyContent: 'center',
    marginRight: theme.spacing(0.6),
    '&:hover': {
      transform: 'scale(1.002)',
      boxShadow: '0 4px 20px 0 rgba(0,0,0,0.1)',
      border: '1px solid #F62F5E',
      cursor: 'pointer',
    },
  },
}));

const Thumbnail = (props) => {
  const classes = useStyles(props);

  return (
    <div className={classes.thumbnail}>
      <img alt="longImage" width="100%" src={props.image} />
    </div>
  );
};

export default Thumbnail;
