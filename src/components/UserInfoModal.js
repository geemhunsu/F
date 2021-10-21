import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { history } from '../redux/ConfigureStore';

import { IconContext } from "react-icons";
import { ImExit } from 'react-icons/im';

import { SideBarBottom, ImageUpload } from './'
import { Grid, Text, Image } from '../elements';
import defaultUserImage from '../images/기본프로필사진.png'
import { deleteCookie } from '../shared/Cookie'

const UserInfoModal = (props) => {
  const preview = useSelector(state => state.image.preview);
  const userInfo = useSelector(state => state.user);

  const logOut = () => {
    deleteCookie('user_id');
    history.replace('/');
    window.alert('로그아웃 됐습니다');
  }

  return (
    <Wrap>
      <Grid position='fixed' top='54px' right='20px' width='auto' height='auto' bg='white'
        borderRadius='10px' boxShadow='rgba(0, 0, 0, 0.2) 0px 10px 36px 0px, 
        rgba(0, 0, 0, 0.06) 0px 0px 0px 1px' padding='12px 12px 12px 6px'
        display='none' flexDirection='column' justifyContent='space-between'
        id='userModal' maxHeight='80vh' overflowX='hidden' overflowY='auto'>
        <Grid display='flex' alignItems='center' justifyContent='flex-start'
          height='auto' borderRadius='10px'
          padding='6px 0 6px 6px'>
          <Image src={userInfo.imageUrl ? userInfo.imageUrl : defaultUserImage}
            size='100' border='1px solid #ced0d4' backgroundPosition='center'
            margin='0 10px 0 0' />
          <Grid width='auto' height='auto'>
            <Text size='0.9rem' bold margin='0 0 5px 0'>
              {userInfo.firstName ? userInfo.firstName + userInfo.lastName : "사용자"}
            </Text>
          </Grid>
        </Grid>
        <Grid border='1px solid #ced0d4' borderRadius='8px' padding='4px' margin='12px 0'>
          <ImageUpload />
        </Grid>
        <Grid hover='rgba(0, 0, 0, 0.05)' height='auto' borderRadius='10px'
          padding='12px 0 6px 6px' display='flex' alignItems='center' _onClick={logOut} >
          <Grid width='50px' height='50px' borderRadius='50px' bg='#e1e2e7' display='flex'
            alignItems='center' justifyContent='center'>
            <IconContext.Provider value={{ color: "black", size: '28', }}>
              <ImExit />
            </IconContext.Provider>
          </Grid>
          <Text margin='0 0 0 8px'>
            로그아웃
          </Text>
        </Grid>
        <Grid height='auto'>
          <SideBarBottom />
        </Grid>
      </Grid>
    </Wrap>
  );
};

const Wrap = styled.div`
 
`;

export default UserInfoModal;