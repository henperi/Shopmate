import React from 'react';
import { Grid, withStyles, Box } from '@material-ui/core';

import Fab from '@material-ui/core/Fab';
import VerticalCard from '../../components/Cards/VerticalCard';
import HorizontalCard from '../../components/Cards/HorizontalCards';
import CustomImage from '../../components/Images/CutomImage';
import Hero from '../../components/Hero/Hero';
import LightFooter from '../../components/Footers/LightFooter';
import { SubscriptionTypeA } from '../../components/SubscriptionArea/SubscriptionArea';
import heroImage from '../../assets/hero.png';
import bagImage from '../../assets/images/bag.png';

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
        <Grid item sm={12} md={12} lg={6} style={{ width: '100%' }}>
          <HorizontalCard
            image={bagImage}
            btnLabel="Shop Now"
            title="Vera Bradley"
            overlayLabel="Sale"
          />
        </Grid>

        {[1, 2, 3, 4].map(item => (
          <Grid key={item} item sm={6} md={4} lg={3}>
            <VerticalCard />
          </Grid>
        ))}
        {[1, 2].map(item => (
          <Grid key={item} item sm={6} md={4} lg={3}>
            <CustomImage alt="Image" overlayPosition="bottomRight" />
          </Grid>
        ))}
      </Grid>
    </Box>

    <SubscriptionTypeA />
    <LightFooter />
  </main>
);

export default MainLanding;
