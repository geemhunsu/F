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
    justifyContent,
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
    justifyContent,
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
  flexDirection: null,
  flexWrap: null,
  AlignItem: null,
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
  justifyContent: null,
  backgroundColor: null,
  lineHeight: null,
  _onClick: () => {},
};

const GridBox = styled.div`
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  width: ${props => props.width};
  height: ${props => props.height};
  background: ${props => props.bg};
  display: ${props => props.display};
  flex-direction: ${props => props.flexDirection};
  flex-wrap: ${props => props.flexWrap};
  align-items: ${props => props.AlignItem};
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
  justify-content: ${props => props.justifyContent};
  background-color: ${props => props.backgroundColor};
  line-height: ${props => props.lineHeight};
  border-radius: ${props => props.borderRadius};
`;

export default Grid;
