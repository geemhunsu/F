import React from 'react';
import { Grid } from '../elements';
import { HeaderSub, HeaderCenter, HeaderLeft, UserInfoModal } from "../components"

const Header = (props) => {
  return (
    <React.Fragment>
      <Grid width='100%' height='56px' boxShadow='rgba(0, 0, 0, 0.1) 0px 2px 12px;'
        display='flex' justifyContent="space-between" alignItems='center' position='fixed' 
        top='0' left='0' bg='white'>
        <Grid width='auto'>
          <HeaderLeft/>
        </Grid>
        <Grid width='auto'>
          <HeaderCenter />
        </Grid>
        <Grid width='auto'>
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