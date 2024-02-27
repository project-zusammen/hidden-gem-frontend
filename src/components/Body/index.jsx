import React from 'react';
import { Grid, Typography } from '@mui/material';
import Card from '../Card';
import ImageUpload from '../ImageUpload';

const Body = () => {
  return (
    <Grid data-testid="body" container spacing={3} marginTop={5} marginBottom={13}>
      {/* Main Content Sections */}
      <Grid item xs={4} md={4} lg={2}>
      </Grid>
      <Grid item xs={4} md={4} lg={8}>
      </Grid>
      <Grid item xs={4} md={4} lg={2}>
        <ImageUpload />
      </Grid>
      <Grid item xs={4} md={4} lg={2}>
      </Grid>
      <Grid item xs={4} md={4} lg={8}>
        <Typography variant="h1" gutterBottom textAlign={"center"}>
          New Reviews
        </Typography>
      </Grid>
      <Grid item xs={4} md={4} lg={2}>
      </Grid>
      <Grid item xs={4} md={4} lg={2}>
      </Grid>
      <Grid item xs={4} md={4} lg={8}>
        <Grid container spacing={2} xs={12}>
          <Grid item xs={3}>
            <Card>
              {/* Card content here */}
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card>
              {/* Card content here */}
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card>
              {/* Card content here */}
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card>
              {/* Card content here */}
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={4} md={4} lg={2}>
      </Grid>
      <Grid item xs={4} md={4} lg={2}>
      </Grid>
      <Grid item xs={4} md={4} lg={8}>
      </Grid>
      <Grid item xs={4} md={4} lg={2}>
      </Grid>
    </Grid>
  );
};

export default Body;
