import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  imageContainer: {
    display: 'flex',
    position: 'relative',
    justifyContent: 'center',
    // alignItems: 'center',
    borderBox: 'box-sizing',
    maxHeight: '300px',
    minHeight: '250px',
    '&:hover': {
      // transform: 'scale(1.202)',
      // boxShadow: props => props.raised && '0 4px 20px 0 rgba(0,0,0,0.5)',
    },
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  overlayContent: {
    position: 'absolute',
    top: '0',
    left: '0',
    padding: '10px',
    display: 'flex',
    // color: props => props.color || theme.palette.common.white,
    // backgroundColor: ({ rgbaColor }) => (rgbaColor ? `rgba(${rgbaColor})` : 'rgba(0,0,0,0.1)'),
    // justifyContent: props => props.justifyContent || 'center',
    // alignItems: props => props.alignItems || 'center',
  },
}));

const ProductImg = (props) => {
  const classes = useStyles(props);
  const { children, justifyContent, alignItems } = props;

  return (
    <div className={classes.imageContainer}>
      <img alt={props.alt} src={props.image} className={classes.image} />
      {
        <div container className={classes.overlayContent}>
          {children}
        </div>
      }
    </div>
  );
};

export default ProductImg;
