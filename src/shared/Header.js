import React from 'react';
import { BsFacebook } from 'react-icons/bs'
import { IconContext } from "react-icons";
import { Grid, Text, Image, Button, Input } from '../elements';
import { HeaderSub, HeaderCenter } from "../components"

const Header = (props) => {
  return (
    <React.Fragment>
      <Grid width='100%' height='56px' boxShadow='rgba(0, 0, 0, 0.1) 0px 2px 12px;'
        display='flex' justifyContent="space-between" alignItems='center'
      >
        <Grid display="flex" alignItems='center' width="auto" height='auto' padding='0  0 0 16px'>
          <i style={{
            backgroundImage: "url('https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/9hjSjlsfbAc.png')",
            backgroundPosition: '-73px -11px', backgroundSize: 'auto', width: '36px', height: '36px',
            backgroundRepeat: 'no-repeat', display: 'inline-block'
          }}></i>
          <Input width="240px" height="40px" borderRadius="50px" border="none"
            bg="#f0f2f5" placeholder='Facebook 검색' padding='0 16px 0 36px'
          margin='0 0 0 6px'  />
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

Header.defaultProps = {

}

export default Header;