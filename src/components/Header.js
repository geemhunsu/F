import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import { Grid, Text, Image, Button, Input } from '../elements';
import { HeaderSub, HeaderCenter, HeaderLeft } from '.';

const Header = (props) => {
  return (
    <React.Fragment>
      <Grid
        width='100%'
        height='56px'
        boxShadow='rgba(0, 0, 0, 0.1) 0px 2px 12px;'
        display='flex'
        justifyContent='space-between'
        alignItems='center'
      >
        <Grid width='auto'>
          <HeaderLeft />
        </Grid>
        <Grid width='auto'>
          <HeaderCenter />
        </Grid>
        <Grid width='auto'>
          <HeaderSub />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Header.defaultProps = {};

export default Header;
