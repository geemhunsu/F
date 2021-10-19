import React from 'react';
import { Grid } from '../elements';
import styled from 'styled-components';

const SideBarBottom = (props) => {
  const {top, bottom, left, right, position} = props;
  const styles = {top, bottom, left, right, position};

  return (
    <Grid>
      <ElUl {...styles}>
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

SideBarBottom.defaultProps = {
  top: null,
  bottom: null,
  left: null,
  right: null,
  position: null,
}

const ElUl = styled.ul`
  position: ${props => props.position};
  top: ${props => props.top};
  bottom: ${props => props.bottom};
  left: ${props => props.left};
  right: ${props => props.right};
  width: 261.5px;
  margin: 0;
  padding: 16px;
  box-sizing: bordor-box;
  
  li {
    display: inline;
    font-size: 0.775rem;

    :not(:last-child):hover {
      cursor: pointer;
      text-decoration:underline;
    }
    
    :not(:last-child)::after {
      content:' · ';
      text-decoration: none;
    }

  }
`;

export default SideBarBottom;