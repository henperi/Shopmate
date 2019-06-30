import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  overlay: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    display: 'flex',
    color: props => props.color || theme.palette.common.white,
    backgroundColor: props => `rgba(${props.rgbaColor})` || 'rgba(0,0,0,0.4)',
    justifyContent: props => props.justifyContent || 'center',
    alignItems: props => props.alignItems || 'center',
  },
  imageContainer: {
    display: 'flex',
    position: 'relative',
    justifyContent: 'center',
    borderBox: 'box-sizing',
    minWidth: '300px',
    minHeight: '300px',
    boxShadow: props => props.raised && '0 2px 10px 0 rgba(0,0,0,0.2)',
    '&:hover': {
      transform: 'scale(1.002)',
      boxShadow: props => props.raised && '0 4px 20px 0 rgba(0,0,0,0.5)',
    },
  },
  image: {
    width: '100%',
  },
}));

const OverlayedImage = (props) => {
  const classes = useStyles(props);
  const { children } = props;

  return (
    <div className={classes.imageContainer}>
      <img alt={props.alt} src={props.image} className={classes.image} />
      <div className={classes.overlay}>{children}</div>
    </div>
  );
};

export default OverlayedImage;
