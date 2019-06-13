import React from 'react';
import {
  Grid, Box, Typography, Paper,
} from '@material-ui/core';

import VerticalCard from '../../components/Cards/VerticalCard';
import LightFooter from '../../components/Footers/LightFooter';

const ShopItem = () => (
  <main>
    <Box mx={3} my={3}>
      <Paper>
        <Grid container spacing={1}>
          <Grid item xs={12} lg={6}>
            <VerticalCard />
          </Grid>
          <Grid item xs={12} lg={6}>
            <VerticalCard />
          </Grid>
        </Grid>
      </Paper>
      <Paper>
        <Grid item xs={12} lg={12}>
          <VerticalCard />
        </Grid>
      </Paper>
      <Typography variant="h5" color="inherit" className="">
        You may also like
      </Typography>
      <Grid container spacing={3}>
        {[1, 2, 3, 4].map(item => (
          <Grid key={item} item sm={6} md={4} lg={3}>
            <VerticalCard />
          </Grid>
        ))}
      </Grid>
    </Box>

    <LightFooter />
  </main>
);

export default ShopItem;
