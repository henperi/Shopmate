import React, { useState } from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import Thumbnail from '../Thumbnail/Thumbnail';

const useStyles = makeStyles(theme => ({
  root: {},
  carousel: {
    display: 'flex',
    height: '435px',
    overflow: 'hidden',
    justifyContent: 'center',
  },
  thumbnailsArea: {
    display: 'flex',
    height: '75px',
    margin: '0 auto',
    marginTop: '30px',
    justifyContent: 'center',
  },
  thumbnail: {
    display: 'flex',
    width: '72px',
    height: '72px',
    overflow: 'hidden',
    justifyContent: 'center',
    marginRight: '5px',
    '&:hover': {
      transform: 'scale(1.002)',
      boxShadow: '0 4px 20px 0 rgba(0,0,0,0.1)',
      border: '1px solid #F62F5E',
      cursor: 'pointer',
    },
  },
}));

const Carousel = (props) => {
  const { thumbnail, images } = props;
  const classes = useStyles(props);

  const [currentImage, setcurrentImage] = useState('');

  return (
    <React.Fragment>
      <Grid container>
        <Grid item lg={12} className={classes.carousel}>
          <img alt="fff" src={currentImage || images[0]} width="100%" />
        </Grid>

        {thumbnail && (
          <Grid item lg={12}>
            <div className={classes.thumbnailsArea}>
              {images.map(image => (
                <div key={image} onClick={() => setcurrentImage(image)} role="presentation">
                  <Thumbnail image={image} />
                </div>
              ))}
            </div>
          </Grid>
        )}
      </Grid>
    </React.Fragment>
  );
};

export default Carousel;
