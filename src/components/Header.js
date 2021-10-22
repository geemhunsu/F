import React from 'react';
import { Grid } from '../elements';
import { HeaderSub, HeaderCenter, HeaderLeft, UserInfoModal } from "../components"

const Header = (props) => {
  return (
    <React.Fragment>
      <Grid width='100vw' height='50px' boxShadow='rgba(0, 0, 0, 0.1) 0px 2px 12px;'
        display='flex' justifyContent="space-between" alignItems='center' position='fixed' 
        top='0' left='0' bg='white' padding='0 0px 0 12px'>
        <Grid width='auto' height='auto'>
          <HeaderLeft/>
        </Grid>
        <Grid width='auto' height='auto'>
          <HeaderCenter />
        </Grid>
        <Grid width='auto' height='auto'>
          <HeaderSub />
        </Grid>
      </Grid>
      <UserInfoModal/>
    </React.Fragment>
  );
};

Header.defaultProps = {

}

export default Header;