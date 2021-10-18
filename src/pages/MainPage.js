import React from 'react';

import { Post } from '../components';
import { Grid } from '../elements';

const MainPage = () => {
  return (
    <React.Fragment>
      <Grid width='100vw' height='100%' bg='gray' padding='20px 0px'>
        <Post />
        <Post />
        <Post />
      </Grid>
    </React.Fragment>
  );
};

export default MainPage;
