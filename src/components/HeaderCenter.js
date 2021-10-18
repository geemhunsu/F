import React from 'react';
import { Grid, Image } from '../elements';
import { IconContext } from "react-icons";
import {AiOutlineHome} from 'react-icons/ai'

const HeaderCenter = (props) => {
  return (
    <Grid width='558px'>
      <Grid width='auto'>
        <IconContext.Provider value={{ color: "black", size:'40' }}>
          <AiOutlineHome/>
        </IconContext.Provider>
      </Grid>
      <Grid width='auto'>

      </Grid>
      <Grid width='auto'>

      </Grid>
      <Grid width='auto'>

      </Grid>
      <Grid width='auto'>

      </Grid>
    </Grid>
  );
};

export default HeaderCenter;