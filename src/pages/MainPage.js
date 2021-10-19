import React from 'react';
import styled from 'styled-components';

import { Post, Header, SideBar, UserList } from '../components';
import { Grid } from '../elements';

const MainPage = () => {
  return (
    <React.Fragment>
      <ResponsiveSidebar>
        <UserList />
        <SideBar />
      </ResponsiveSidebar>
      <Grid width='100%' height='100%' bg='whitesmoke' padding='60px 0 10px 0'>
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>
        {/* <Post /> */}
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

const ResponsiveSidebar = styled.div`
  @media screen and (max-width: 1175px) {
    display: none;
  } ;
`;

export default MainPage;
