import React from 'react';
import styled from 'styled-components'
import { IconContext } from "react-icons";
import { ImExit } from 'react-icons/im'

import { Grid, Text, Image } from '../elements';
import defaultUserImage from '../images/기본프로필사진.png'

const UserInfoModal = (props) => {
  return (
    <Grid position='fixed' top='54px' right='20px' width='300px' height='350px' bg='white'
      borderRadius='10px' boxShadow='rgba(0, 0, 0, 0.2) 0px 10px 36px 0px, 
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px' padding='12px 12px 12px 6px'
      display='flex' flexDirection='column' justifyContent='space-between'>
      <Grid display='flex' alignItems='center' justifyContent='flex-start'
        hover='rgba(0, 0, 0, 0.05)' height='auto' borderRadius='10px'
        padding='6px 0 6px 6px'>
        <Image src={defaultUserImage} size='100' border='1px solid gray'
          margin='0 10px 0 0' />
        <Grid width='auto' height='auto'>
          <Text size='0.9rem' bold margin='0 0 5px 0'>사용자</Text>
          <Text size='0.85rem' margin='0'>내 프로필 사진 바꾸기</Text>
        </Grid>
      </Grid>
      <Grid height='auto'>
        <hr style={{ borderWidth: '1px 0 0 0', borderStyle: '' }} />
      </Grid>
      <Grid hover='rgba(0, 0, 0, 0.05)' height='auto' borderRadius='10px'
        padding='12px 0 6px 12px' display='flex' alignItems='center'>
        <Grid width='100px' height='100px' borderRadius='50px' bg='#e1e2e7' display='flex'
        alignItems='center' justifyContent='center'>
          <IconContext.Provider value={{ color: "black", size: '60', padding: '5px 0 0 5px' 
        }}>
            <ImExit />
          </IconContext.Provider>
        </Grid>
        <Text margin='0'>로그아웃</Text>
      </Grid>
    </Grid>
  );
};

export default UserInfoModal;