import React from 'react';
import styled from 'styled-components';

import { Post, Header, SideBar } from '../components';
import { Grid } from '../elements';

const MainPage = () => {
  return (
    <React.Fragment>
      <SideBar />
      <Grid width='100%' height='100%' bg='whitesmoke' padding='0 0 10px 0'>
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>
        <Post />
        <Post />
        <Post />
      </Grid>
    </React.Fragment>
  );
};

const HeaderWrapper = styled.div`
  z-index: 100;
  position: sticky;
  top: 0px;
  background: white;
`;

export default MainPage;
