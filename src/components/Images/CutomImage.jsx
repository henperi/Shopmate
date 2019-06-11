import React from 'react';
import { Typography } from '@material-ui/core';
import PropType from 'prop-types';
import useStyles from './style';

const CustomImage = ({
  src, alt, OverlayContent, overlayPosition,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.imageContainer}>
      <img alt={alt} src={src} className={classes.image} />
      {OverlayContent && <div className={classes[overlayPosition]}>{OverlayContent}</div>}
    </div>
  );
};

CustomImage.propTypes = {
  src: PropType.string,
  alt: PropType.string,
  OverlayContent: PropType.element,
  overlayPosition: PropType.string,
};

CustomImage.defaultProps = {
  src: 'https://source.unsplash.com/user/erondu',
  alt: 'Image Name',
  OverlayContent: (
    <Typography
      gutterBottom
      variant="h5"
      component="h2"
      color="primary"
      style={{ maxWidth: '150px', maxHeight: '80px' }}
    >
      Add any kind of content here Add any kind of content here
    </Typography>
  ),
  overlayPosition: 'topLeft',
};

export default CustomImage;
