import React from 'react';
import Profile from '../src/Profile';
import CustomAppBar from '../src/CustomAppBar';
import { Grid } from '@material-ui/core';

const About = () => {
  return (
    <Grid container>
      <Grid item />
      <Grid item container>
        <CustomAppBar />

      </Grid>
      <Grid item />
    </Grid>
  );
};
export default About;
