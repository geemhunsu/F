import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { Post, Header, SideBar, UserList } from '../components';
import { Grid } from '../elements';
import PostWrite from '../components/PostWrite';
import { userCreators } from '../redux/modules/user';

const MainPage = () => {
  const dispatch = useDispatch();
  const userModalState = useSelector(state => state.user.userModalState);
  const [modalDisplay, setModalDisplay] = React.useState('flex');

  const hideModal = () => {
    dispatch(userCreators.setUserModal('none'));
    console.log('닫는 중')
    document.getElementById('userModal').style.display = userModalState;
  }

  return (
    <div>
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
    </div>
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
