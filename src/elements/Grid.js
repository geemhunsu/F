import React from 'react';
import styled from 'styled-components';

const Grid = props => {
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
    justifyContent,
    alignItems,
    flexDirection,
    flexWrap,
    AlignItem,
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
    backgroundColor,
    lineHeight,
  } = props;

  const styles = {
    id,
    margin,
    padding,
    width,
    height,
    bg,
    display,
    justifyContent,
    alignItems,
    flexDirection,
    flexWrap,
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
    backgroundColor,
    lineHeight,
  };
  return (
    <GridBox {...styles} onClick={_onClick}>
      {children}
    </GridBox>
  );
};

Grid.defaultProps = {
  children: null,
  id: null,
  margin: null,
  padding: null,
  width: '100%',
  height: '100%',
  bg: null,
  display: null,
  justifyContent: null,
  alignItems: false,
  flexDirection: false,
  flexWrap: null,
  textAlign: false,
  border: null,
  borderRadius: false,
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
  _onClick: () => {},
};

const GridBox = styled.div`
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  width: ${props => props.width};
  height: ${props => props.height};
  background: ${props => props.bg};
  display: ${props => props.display};
  justify-content: ${props => props.justifyContent};
  ${props => (props.alignItems ? `align-items: ${props.alignItems}` : '')};
  ${props => (props.flexDirection ? `flex-direction:${props.flexDirection}` : '')};
  flex-wrap: ${props => props.flexWrap};
  text-align: ${props => props.textAlign};
  border: ${props => props.border};
  ${props => (props.borderRadius ? `border-radius: ${props.borderRadius}` : '')};
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
  background-color: ${props => props.backgroundColor}; ;
`;

export default Grid;
