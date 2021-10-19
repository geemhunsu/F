import React from 'react';
import {Grid} from '../elements'
import {SideBarBottom, SideBarTop} from '../components'

const SideBar = (props) => {
  return (
    <React.Fragment>
      <Grid position='fixed' top='56px' left='0' width='293.5px' height='auto'
      padding='16px 0 20% 0' display='flex' flexDirection='column'
      justifyContent='space-between' bg='#f0f2f5' >
        <Grid height='calc(80vh - 36px)' padding='0 8px'>
          <SideBarTop/>
        </Grid>
        <Grid height='calc(20vh - 36px)' >
          <SideBarBottom/>
        </Grid>
      </Grid>      
    </React.Fragment>
  );
};

export default SideBar;