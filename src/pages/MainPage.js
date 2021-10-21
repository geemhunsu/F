import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { Post, Header, SideBar, UserList } from '../components';
import { Grid } from '../elements';
import PostWrite from '../components/PostWrite';
import { userCreators } from '../redux/modules/user';

const MainPage = () => {
  const dispatch = useDispatch();
  
  // useEffect(() => {
  //   dispatch(userCreators.setUserMiddleware());
  // }, [])

  return (
    <React.Fragment>
      <ResponsiveSidebar>
        <SideBar />
      </ResponsiveSidebar>
      <ResponsiveUserList>
        <UserList />
      </ResponsiveUserList>
      <Grid height='100%' bg='whitesmoke' padding='60px 0 10px 0'>
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>
        <PostWrite />
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

const ResponsiveSidebar = styled.div`
  @media screen and (max-width: 1175px) {
    display: none;
  } ;
`;

const ResponsiveUserList = styled.div`
  @media screen and (max-width: 1250px) {
    display: none;
  } ;
`;

export default MainPage;
