import React from 'react';
import styled from 'styled-components';

const Button = props => {
  const { color, text, _onClick, isFloat, children, margin, width, padding, backgroundColor, height, fontSize, borderRadius } = props;

  if (isFloat) {
    return (
      <>
        <FloatButton onClick={_onClick}></FloatButton>
      </>
    );
  }

  const styles = {
    margin: margin,
    width: width,
    padding: padding,
    backgroundColor: backgroundColor,
    color: color,
    height: height,
    fontSize: fontSize,
    borderRadius: borderRadius,
  };

  return (
    <>
      <ElButton {...styles} onClick={_onClick}>
        {text ? text : children}
      </ElButton>
    </>
  );
};

Button.defaultProps = {
  position: false,
  text: false,
  children: null,
  _onClick: () => {},
  isFloat: false,
  margin: 'auto',
  width: '100%',
  padding: '12px 0px',
  color: 'white',
  height: '50px',
};

const ElButton = styled.button`
  width: ${props => props.width};
  color: ${props => props.color};
  padding: ${props => props.padding};
  height: ${props => props.height};
  font-size: ${props => props.fontSize};
  margin: ${props => props.margin};
  ${props => (props.backgroundColor ? `background-color:${props.backgroundColor}` : '#blue')}
  box-sizing: border-box;
  border-radius: 5px;
  font-size: 17px;
  font-weight: bold;
  border: none;
  ${props => (props.borderRadius ? `border-radius:${props.borderRadius}` : 'steelblue')};
  background-color: ${props => props.backgroundColor}; ;
`;

const FloatButton = styled.div`
  width: 50px;
  height: 50px;
  background-color: #ffffff;
  color: ${props => props.color};
  box-sizing: border-box;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.12), 0 2px 5px rgba(0, 0, 0, 0.24);
  font-size: 36px;
  font-weight: bold;
  position: fixed;
  bottom: 50px;
  right: 16px;
  text-align: center;
  vertical-align: middle;
  border: none;
  border-radius: 50px;
`;

export default Button;
