import React from 'react';
import { Grid } from '../elements';
import styled from 'styled-components';

const SideBarBottom = (props) => {
  return (
    <Grid>
      <ElUl>
        <li>개인정보처리방침</li>
        <li>약관</li>
        <li>광고</li>
        <li>AdChoices</li>
        <li>쿠키</li>
        <li>더 보기</li>
        <li>Facebook © 2021</li>
      </ElUl>
    </Grid>
  );
};


const ElUl = styled.ul`
  position: fixed;
  bottom: 0;
  left:0;
  width: 261.5px;
  margin: 0;
  padding: 16px;
  box-sizing: bordor-box;
  
  li {
    display: inline;
    font-size: 0.775rem;

    :not(:last-child)::after {
      content:' · ';
    }

    :not(:last-child):hover {
      cursor: pointer;
      text-decoration:underline;
    }

  }
`;

export default SideBarBottom;