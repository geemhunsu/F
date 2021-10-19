import React from 'react';
import { Grid, Image } from '../elements';
import { IconContext } from 'react-icons';
import { AiOutlineHome } from 'react-icons/ai';
import { BsPeople } from 'react-icons/bs';
import { MdOndemandVideo } from 'react-icons/md';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { SiFacebookgaming } from 'react-icons/si';
import styled from 'styled-components';

const HeaderCenter = (props) => {
  return (
    <HeaderWrapper>
      <Grid
        width='558px'        
        display='flex'
        alignItems='center'
        justifyContent='space-around'
      >
        <Grid
          height='48px'
          width='111.6px'
          display='flex'
          alignItems='center'
          justifyContent='center'
          hover='rgba(0, 0, 0, 0.05)'
          borderRadius='10px'
        >
          <IconContext.Provider value={{ color: 'black', size: '28' }}>
            <AiOutlineHome />
          </IconContext.Provider>
        </Grid>
        <Grid
          height='48px'
          width='111.6px'
          display='flex'
          alignItems='center'
          justifyContent='center'
          hover='rgba(0, 0, 0, 0.05)'
          borderRadius='10px'
        >
          <IconContext.Provider value={{ color: 'black', size: '28' }}>
            <BsPeople />
          </IconContext.Provider>
        </Grid>
        <Grid
          height='48px'
          width='111.6px'
          display='flex'
          alignItems='center'
          justifyContent='center'
          hover='rgba(0, 0, 0, 0.05)'
          borderRadius='10px'
        >
          <IconContext.Provider value={{ color: 'black', size: '28' }}>
            <MdOndemandVideo />
          </IconContext.Provider>
        </Grid>
        <Grid
          height='48px'
          width='111.6px'
          display='flex'
          alignItems='center'
          justifyContent='center'
          hover='rgba(0, 0, 0, 0.05)'
          borderRadius='10px'
        >
          <IconContext.Provider value={{ color: 'black', size: '28' }}>
            <HiOutlineUserGroup />
          </IconContext.Provider>
        </Grid>
        <Grid
          height='48px'
          width='111.6px'
          display='flex'
          alignItems='center'
          justifyContent='center'
          hover='rgba(0, 0, 0, 0.05)'
          borderRadius='10px'
        >
          <IconContext.Provider value={{ color: 'black', size: '28' }}>
            <SiFacebookgaming />
          </IconContext.Provider>
        </Grid>
      </Grid>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  @media screen and (max-width: 1165px) {
    display: none;
  } ;
`;

export default HeaderCenter;
