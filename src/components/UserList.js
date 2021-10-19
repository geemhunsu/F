import React from 'react';
import styled from 'styled-components';

import { Grid, Image, Text } from '../elements'
import defaultUserImage from '../images/기본프로필사진.png';

const userList = (props) => {
  return (
    <React.Fragment>
      <Grid position='fixed' top='56px' right='0' width='293.5px'
        padding='16px' bg='#f0f2f5'>
        <Grid display='flex' justifyContent='space-between' alignItems='center' height='auto'>
          <Text bold color='#75777b'>유저 목록</Text>
          <Grid width='40%' height='auto' display='flex' justifyContent='space-between'>
            <NewRooms />
            <Search />
            <Option />
          </Grid>
        </Grid>
        <Grid display='flex' alignItems='center' height='auto'>
          <Image src={defaultUserImage}/>
          <Text margin='0 0 0 8px' size='0.85rem'>유저이름</Text>
        </Grid>
        
        
      </Grid>
    </React.Fragment>
  );
};

const NewRooms = styled.i`
background-image: url("https://static.xx.fbcdn.net/rsrc.php/v3/yO/r/-y9l2c1Swbf.png");
background-position: 0px -489px;
background-size: auto;
width: 16px;
height: 16px;
background-repeat: no-repeat;
display: inline-block;
`;
const Search = styled.i`
  background-image: url("https://static.xx.fbcdn.net/rsrc.php/v3/yW/r/ttTXZ6XJuCZ.png");
  background-position: -102px -149px;
  background-size: auto;
  width: 16px;
  height: 16px;
  background-repeat: no-repeat;
  display: inline-block;
`;
const Option = styled.i`
  background-image: url("https://static.xx.fbcdn.net/rsrc.php/v3/yW/r/ttTXZ6XJuCZ.png");
  background-position: -63px -107px;
  background-size: auto;
  width: 20px;
  height: 20px;
  background-repeat: no-repeat;
  display: inline-block;
`;

export default userList;