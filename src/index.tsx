import React from 'react';
import ReactDOM from 'react-dom';
import {
  Grid, Typography
} from '@mui/material';

import TopBar from './components/topBar/topBar';
import ProductList from './components/productList/productList';
import ProductDetails from './components/productDetails/productDetails';

class App extends React.Component {
  render() {
    return (
      <div>
      <Grid container spacing={0}>
        <Grid item sm={12}>
          <TopBar />
        </Grid>
        <Grid item sm={4}>
          <ProductList />
        </Grid>
        <Grid item sm={8}>
          <ProductDetails />
        </Grid>
      </Grid>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
