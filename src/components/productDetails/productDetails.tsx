import * as React from 'react';

import {
  Grid, TextField, Typography
} from '@mui/material';

import './productDetails.css';

class ProductDetails extends React.Component {
  render() {
    return (
      <div>
      <Grid container spacing={0} sx={{border: 1, margin: 1}}>

        <Grid item xs={12} sx={{border: 1, margin: 1}}>
          <Grid container spacing={0}>
            <Grid item xs={4} sx={{border: 1, margin: 1}}>
              <Typography>Picture</Typography>
            </Grid>
            <Grid item xs={8} sx={{border: 1, margin: 1}}>
              <Typography>Barcode #</Typography>
              <Typography>Name</Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sx={{border: 1, margin: 1}}>
          <Typography>Price</Typography>
        </Grid>

        <Grid item xs={12} sx={{margin: 1}}>
          <TextField
          fullWidth
          label="Product Notes"
          variant="outlined"
          />
        </Grid>

      </Grid>
      </div>
    );
  }
}

export default ProductDetails;
