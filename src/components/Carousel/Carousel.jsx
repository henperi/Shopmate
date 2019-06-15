import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import longImage from '../../assets/longImage.jpeg';

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
  const { thumbnail } = props;
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container>
        <Grid item lg={12} className={classes.carousel}>
          <img alt="fff" src={longImage} width="100%" />
        </Grid>

        {thumbnail && (
          <Grid item lg={12}>
            <div className={classes.thumbnailsArea}>
              <div className={classes.thumbnail}>
                <img alt="longImage" width="100%" src={longImage} />
              </div>
              <div className={classes.thumbnail}>
                <img alt="longImage" width="100%" src="https://source.unsplash.com/user/erondu" />
              </div>
              <div className={classes.thumbnail}>
                <img alt="longImage" width="100%" src={longImage} />
              </div>
            </div>
          </Grid>
        )}
      </Grid>
    </React.Fragment>
  );
};

export default Carousel;
