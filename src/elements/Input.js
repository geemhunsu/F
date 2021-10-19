import React from 'react';
import styled from 'styled-components';
import { Grid, Text } from './index';

const Input = (props) => {
  const {
    label,
    placeholder,
    _onChange,
    type,
    multiLine,
    value,
    margin,
    width,
    padding,
    height,
    border,
    borderRadius,
    bg,
    backgroundImage,
    backgroundColor,
  } = props;
  const styles = {
    padding,
    height,
    border,
    borderRadius,
    bg,
    backgroundImage,
  };
  if (multiLine) {
    return (
      <Grid>
        {label && <Text margin='0px'>{label}</Text>}
        <ElTextarea
          backgroundColor={backgroundColor}
          value={value}
          rows={10}
          placeholder={placeholder}
          onChange={_onChange}
        ></ElTextarea>
      </Grid>
    );
  }

  return (
    <Grid>
      {label && <Text margin='0px'>{label}</Text>}
      <ElInput
        {...styles}
        backgroundColor={backgroundColor}
        width={width}
        margin={margin}
        type={type}
        placeholder={placeholder}
        onChange={_onChange}
      />
    </Grid>
  );
};

Input.defaultProps = {
  multiLine: false,
  label: false,
  placeholder: '텍스트를 입력해주세요.',
  type: 'text',
  value: '',
  margin: 0,
  padding: false,
  width: '100%',
  height: false,
  border: false,
  borderRadius: false,
  bg: false,
  backgroundImage: false,
  _onChange: () => {},
};

const ElTextarea = styled.textarea`
  margin: ${(props) => props.margin};
  border: ${(props) => props.border};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.borderRadius};
  background: ${(props) => props.bg};
  padding: ${(props) => props.padding};
  backgroundimage: ${(props) => props.backgroundImage};
  box-sizing: border-box;
  background-color: ${(props) => props.backgroundColor};
`;

const ElInput = styled.input`
  margin: ${(props) => props.margin};
  border: ${(props) => props.border};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.borderRadius};
  background: ${(props) => props.bg};
  padding: ${(props) => props.padding};
  backgroundimage: ${(props) => props.backgroundImage};
  box-sizing: border-box;
  border-radius: 5px;
  background-color: ${(props) => props.backgroundColor};
`;

export default Input;
