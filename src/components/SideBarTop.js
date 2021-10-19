import React from 'react';
import styled from 'styled-components';
import { Grid, Image, Text } from '../elements';

import defaultUserImage from '../images/기본프로필사진.png'
import FindFriend from '../images/1.친구 찾기.png'
import PastToday from '../images/4.과거의오늘.png'
import GameVideo from '../images/게임동영상.png'
import Group from '../images/2.그룹.png'
import Watch from '../images/3.Watch.png'
import Saved from '../images/5.저장됨.png'
import Page from '../images/6.페이지.png'
import Event from '../images/7.이벤트.png'
import ChaeDragon from '../images/8.채용정보.png'
import Current from '../images/최신글.png'
import ShowMore from '../images/ttTXZ6XJuCZ.png'

const SideBarTop = (props) => {
  return (
    <Grid>
      <Grid width='90%' height='46px' display='flex' alignItems='center' padding='0 8px'
      hover='rgba(0, 0, 0, 0.05)' borderRadius='10px'>
        <Image src={defaultUserImage} size='32' border='1px solid gray'/>
        <Text size='0.93rem' margin='0 0 0 7px' >이름</Text>
      </Grid>
      <Grid width='90%' height='46px' display='flex' alignItems='center' padding='0 8px'
      hover='rgba(0, 0, 0, 0.05)' borderRadius='10px'>
        <Image src={FindFriend} size='32'/>
        <Text size='0.93rem' margin='0 0 0 7px' >친구</Text>
      </Grid>
      <Grid width='90%' height='46px' display='flex' alignItems='center' padding='0 8px'
      hover='rgba(0, 0, 0, 0.05)' borderRadius='10px'>
        <Image src={PastToday} size='32'/>
        <Text size='0.93rem' margin='0 0 0 7px' >과거의 오늘</Text>
      </Grid>
      <Grid width='90%' height='46px' display='flex' alignItems='center' padding='0 8px'
      hover='rgba(0, 0, 0, 0.05)' borderRadius='10px'>
        <Image src={GameVideo} size='32'/>
        <Text size='0.93rem' margin='0 0 0 7px' >게임 동영상</Text>
      </Grid>
      <Grid width='90%' height='46px' display='flex' alignItems='center' padding='0 8px'
      hover='rgba(0, 0, 0, 0.05)' borderRadius='10px'>
        <Image src={Group} size='32'/>
        <Text size='0.93rem' margin='0 0 0 7px' >그룹</Text>
      </Grid>
      <Grid width='90%' height='46px' display='flex' alignItems='center' padding='0 8px'
      hover='rgba(0, 0, 0, 0.05)' borderRadius='10px'>
        <Image src={Watch} size='32'/>
        <Text size='0.93rem' margin='0 0 0 7px' >Watch</Text>
      </Grid>
      <Grid width='90%' height='46px' display='flex' alignItems='center' padding='0 8px'
      hover='rgba(0, 0, 0, 0.05)' borderRadius='10px'>
        <Image src={Saved} size='32'/>
        <Text size='0.93rem' margin='0 0 0 7px' >저장됨</Text>
      </Grid>
      <Grid width='90%' height='46px' display='flex' alignItems='center' padding='0 8px'
      hover='rgba(0, 0, 0, 0.05)' borderRadius='10px'>
        <Image src={Page} size='32'/>
        <Text size='0.93rem' margin='0 0 0 7px' >페이지</Text>
      </Grid>
      <Grid width='90%' height='46px' display='flex' alignItems='center' padding='0 8px'
      hover='rgba(0, 0, 0, 0.05)' borderRadius='10px'>
        <Image src={Event} size='32'/>
        <Text size='0.93rem' margin='0 0 0 7px' >이벤트</Text>
      </Grid>
      <Grid width='90%' height='46px' display='flex' alignItems='center' padding='0 8px'
      hover='rgba(0, 0, 0, 0.05)' borderRadius='10px'>
        <Image src={ChaeDragon} size='32'/>
        <Text size='0.93rem' margin='0 0 0 7px' >채용 정보</Text>
      </Grid>
      <Grid width='90%' height='46px' display='flex' alignItems='center' padding='0 8px'
      hover='rgba(0, 0, 0, 0.05)' borderRadius='10px'>
        <Image src={Current} size='32'/>
        <Text size='0.93rem' margin='0 0 0 7px' >최신글</Text>
      </Grid>
      <Grid width='90%' height='46px' display='flex' alignItems='center' padding='0 8px'
      hover='rgba(0, 0, 0, 0.05)' borderRadius='10px'>
        <Grid width='30px' height='30px' display='flex' alignItems='center' 
        justifyConten='center' bg='#e1e2e7' borderRadius='16px' margin='0 5px' >
          <ElSpan/>
        </Grid>
        <Text size='0.93rem' margin='0 0 0 7px' >더보기</Text>
      </Grid>      
    </Grid>
  );
};

const ElSpan = styled.span`
  display: block;
  margin-left: 4px;
  width: 20px;
  height: 20px;
  border-radius: 16px;
  background: url(${ShowMore}) no-repeat;  
  background-position: -62px -85px;
`;

export default SideBarTop;