import React from 'react';
import { Grid, withStyles, Box } from '@material-ui/core';

import Fab from '@material-ui/core/Fab';
import VerticalCard from '../../components/Cards/VerticalCard';
import HorizontalCard from '../../components/Cards/HorizontalCards';
import OverlayedImage from '../../components/Images/OverlayedImage';

import Hero from '../../components/Hero/Hero';
import LightFooter from '../../components/Footers/LightFooter';
import { SubscriptionTypeA } from '../../components/SubscriptionArea/SubscriptionArea';

import heroImage from '../../assets/hero.png';
import bagImage from '../../assets/images/bag.png';
import manImage from '../../assets/images/man.png';
import Text from '../../components/Text/Text';

export const CustomButton = withStyles(theme => ({
  root: {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.common.white,
    textTransform: 'capitalize',
    padding: theme.spacing(8),
  },
}))(Fab);

const MainLanding = () => (
  <main>
    <Hero image={heroImage} />
    <Box mx={3} my={3}>
      <Grid container spacing={3}>
        <Grid item sm={12} md={12} lg={12} style={{ width: '100%', display: 'flex' }}>
          <HorizontalCard
            image={bagImage}
            btnLabel="Shop Now"
            title="Vera Bradley"
            overlayLabel="Sale"
          />
        </Grid>

        {[].map(item => (
          <Grid key={item} item sm={6} md={4} lg={3}>
            <VerticalCard />
          </Grid>
        ))}
        {[1].map(item => (
          <Grid key={item} item xs={12} sm={6} md={4} lg={3}>
            <Grid item sm={12}>
              <OverlayedImage image="" rgbaColor="132,230,241,1" raised>
                <Text color="inherit" classnames={['h2']}>
                  Men
                </Text>
              </OverlayedImage>
            </Grid>
            <br />
            <Grid item sm={12}>
              <OverlayedImage image={manImage} rgbaColor="255,210,1,0.7" raised>
                <Text color="inherit" classnames={['h2']}>
                  Men
                </Text>
              </OverlayedImage>
            </Grid>
          </Grid>
        ))}

        {[0].map(item => (
          <Grid key={item} item sm={6} md={8} lg={3}>
            <VerticalCard />
          </Grid>
        ))}
      </Grid>
    </Box>

    <SubscriptionTypeA />
    <LightFooter />
  </main>
);

export default MainLanding;
