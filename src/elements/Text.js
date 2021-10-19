import React from 'react';
import styled from 'styled-components'


const Text = (props) => {
  const { children, color, size, bold, align, margin, padding, family, border, width } = props;
  const styles = {color, size, bold, align, margin, padding, family, border, width};
  return (
    <ElText {...styles}>
      {children}
    </ElText>
  );
};

Text.defaultProps = {
  children: null,
  color: null,
  size: null,
  bold: false,
  align: null,
  margin: false,
  padding: false,
  family: false, //폰트 타입
  border: null,
  width: null,
}

const ElText = styled.p`
  color: ${props => props.color};
  font-size: ${props => props.size};
  font-weight: ${props => props.bold ? 'bold' : '400'};
  text-align: ${props => props.align};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  family: ${props => props.family};
  border: ${props => props.border};
  width: ${props => props.width};  
`;

export default Text;