import React from 'react';
import styled from 'styled-components'
import { Grid, Image, Input } from '../elements';
import searchIcon from '../images/headerMore/searchicon.png'


const HeaderLeft = (props) => {
  return (
    <Grid display="flex" alignItems='center' width="auto" padding='0  0 0 16px'>
      <i style={{
        backgroundImage: "url('https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/9hjSjlsfbAc.png')",
        backgroundPosition: '-73px -11px', backgroundSize: 'auto', width: '36px', height: '36px',
        backgroundRepeat: 'no-repeat', display: 'inline-block', cursor: 'pointer'
      }} ></i>
          
        <ElInput placeholder='Facebook 검색' />
      
    </Grid>
  );
};

const ElInput = styled.input`
  width: 190px;
  height: 40px;
  border-radius: 50px;
  border: none;
  background: #f0f2f5;
  padding: 0 16px 0 36px;
  margin: 0 0 0 6px;
  font-weight: bold;  
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  background-position: 10px 12px;

  :focus {
    outline: none;
  }
`;

const ElI = styled.i`
  background-image:url(${searchIcon});
  background-position:-170px -149px;
  background-size:auto;
  width:16px;
  height:16px;
  background-repeat:no-repeat;
  display:inline-block;
  background-position-x: -170px;
  background-position-y: -149px;
`;

// width="240px" height="40px" borderRadius="50px" border="none"
//         bg="#f0f2f5" placeholder='Facebook 검색' padding='0 16px 0 36px'
//         margin='0 0 0 6px'
export default HeaderLeft;