import React from 'react';
import styled from 'styled-components';

const Grid = (props) => {
  const {
    children,
    _onClick,
    id,
    margin,
    padding,
    width,
    height,
    bg,
    display,
    flexDirection,
    flexAlign,
    flexWrap,
    flexItem,
    textAlign,
    border,
    borderRadius,
    borderTop,
    borderBottom,
    borderLeft,
    borderRight,
    overflow,
    minWidth,
    maxWidth,
    minHeight,
    maxHeight,
    boxShadow,
    position,
    top,
    bottom,
    left,
    right,
  } = props;

  const styles = {
    id,
    margin,
    padding,
    width,
    height,
    bg,
    display,
    flexDirection,
    flexAlign,
    flexWrap,
    flexItem,
    textAlign,
    border,
    borderRadius,
    borderTop,
    borderBottom,
    borderLeft,
    borderRight,
    overflow,
    minWidth,
    maxWidth,
    minHeight,
    maxHeight,
    boxShadow,
    position,
    top,
    bottom,
    left,
    right,
  }
  return (
    <GridBox {...styles} onClick={_onClick} id={id}>
      {children}
    </GridBox>
  );
};

Grid.defaultProps = {
  children: null,
  id: null,
  margin: null,
  padding: null,
  width: "100%",
  height: "100%",
  bg: null,
  display: null,
  flexDirection: null,
  flexAlign: null,
  flexWrap: null,
  flexItem: null,
  textAlign: false,
  border: null,
  borderRadius: null,
  borderTop: null,
  borderBottom: null,
  borderLeft: null,
  borderRight: null,
  overflow: null,
  minWidth: null,
  maxWidth: null,
  minHeight: null,
  maxHeight: null,
  shadow: null,
  potision: null,
  top: null,
  bottom: null,
  left: null,
  right: null,
  _onClick: () => { },
}

const GridBox = styled.div`
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  width: ${props => props.width};
  height: ${props => props.height};
  background: ${props => props.bg};
  display: ${props => props.display};
  flex-direction: ${props => props.flexDirection};
  flex-align: ${props => props.flexAlign};
  flex-wrap: ${props => props.flexWrap};
  flex-item: ${props => props.flexItem};
  text-align: ${props => props.textAlign};
  border: ${props => props.border};
  border-top: ${props => props.borderTop};
  border-bottom: ${props => props.borderBottom};
  border-left: ${props => props.borderLeft};
  border-right: ${props => props.borderRight};
  overflow: ${props => props.overflow};
  min-width: ${props => props.minWidth};
  max-width: ${props => props.maxWidth};
  min-height: ${props => props.minHeight};
  max-height: ${props => props.maxHeight};
  box-shadow: ${props => props.shadow};
  position: ${props => props.position};
  top: ${props => props.top};
  bottom: ${props => props.bottom};
  left: ${props => props.left};
  right: ${props => props.right};

  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #2f3542;
    border-radius: 15px;
  }
  ::-webkit-scrollbar-track {
    background-color: grey;
    border-radius: 15px;
  }
`;

export default Grid;