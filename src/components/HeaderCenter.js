import React from 'react';
import styled from 'styled-components';

import { IconContext } from 'react-icons';
import { AiOutlineHome } from 'react-icons/ai';
import { BsPeople } from 'react-icons/bs';
import { MdOndemandVideo } from 'react-icons/md';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { SiFacebookgaming } from 'react-icons/si';
import {AiFillHome} from 'react-icons/ai';

import { Grid } from '../elements';

const HeaderCenter = (props) => {
  const [clickState, setClickState] = React.useState();

  return (
    <HeaderWrapper>
      <Grid
        width='595px'        
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
          hover
          borderBottom='3px solid #1877f2'
        >
          <IconContext.Provider value={{ color: '#1877f2', size: '24' }}>
            <AiFillHome />
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
          <IconContext.Provider value={{ color: 'black', size: '24' }}>
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
          <IconContext.Provider value={{ color: 'black', size: '24' }}>
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
          <IconContext.Provider value={{ color: 'black', size: '24' }}>
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
          <IconContext.Provider value={{ color: 'black', size: '24' }}>
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
